import os
from flask import (
    Flask,
    render_template,
    request,
    url_for,
    redirect,
    flash,
    send_from_directory,
    session,
)
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String, Boolean
from flask_login import (
    UserMixin,
    login_user,
    LoginManager,
    login_required,
    current_user,
    logout_user,
)

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret-key-goes-here"
login_manager = LoginManager()
login_manager.init_app(app)


# CREATE DATABASE
class Base(DeclarativeBase):
    pass


db_name = "users.db"
db_route = os.path.join(os.path.dirname(__file__), "instance", db_name)
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_route}"
db = SQLAlchemy(model_class=Base)
db.init_app(app)

# CREATE TABLE IN DB


class User(UserMixin, db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    email: Mapped[str] = mapped_column(String(100), unique=True)
    password: Mapped[str] = mapped_column(String(100))
    name: Mapped[str] = mapped_column(String(1000))

    def get_id(self):
        return str(self.id)


with app.app_context():
    db.create_all()


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route("/")
def home():
    return render_template("index.html", logged_in=current_user.is_authenticated)


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        data = request.form
        user = db.session.execute(
            db.select(User).where(User.email == data["email"])
        ).scalar()
        if user:
            flash("You are already signed up, with that email, log in instead.")
            return redirect(url_for("login"))

        hash_password = generate_password_hash(
            data["password"], method="scrypt", salt_length=10
        )
        new_user = User(
            email=data["email"],
            password=hash_password,
            name=data["name"],
        )

        db.session.add(new_user)
        db.session.commit()
        login_user(new_user)
        next = request.args.get("next")

        return redirect(url_for(next or "secrets"))

    return render_template("register.html", logged_in=current_user.is_authenticated)


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        data = request.form
        email = data["email"]
        password = data["password"]
        user = db.session.execute(
            db.select(User).where(User.email == email)
        ).scalar_one_or_none()

        if user:
            if check_password_hash(user.password, password):
                login_user(user)
                next = request.args.get("next")
                return redirect(next or url_for("secrets"))
            else:
                flash("Password incorrect, please try again.")
                return redirect(url_for("login"))

        else:
            flash("The email does not exist, please try again")
            return redirect(url_for("login"))
    return render_template("login.html", logged_in=current_user.is_authenticated)


@app.route("/secrets")
@login_required
def secrets():
    return render_template("secrets.html", name=current_user.name, logged_in=True)


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("home"))


@app.route("/download")
def download():
    return send_from_directory("static", path="files/cheat_sheet.pdf")


if __name__ == "__main__":
    app.run(debug=True)
