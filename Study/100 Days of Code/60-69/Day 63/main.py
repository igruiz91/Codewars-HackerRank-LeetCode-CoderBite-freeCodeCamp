from flask import Flask, render_template, request, redirect, url_for
import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String, Float

class Base(DeclarativeBase):
    pass

app = Flask(__name__)

#Database Configurations
db_name = "books-collection.db"
db_route = os.path.join(os.path.dirname(__file__), db_name)
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_route}"
db = SQLAlchemy(model_class=Base)
db.init_app(app)

class Books(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(250), unique=True, nullable=False)
    author: Mapped[str] = mapped_column(String(250), nullable=False)
    rating: Mapped[float] = mapped_column(Float, nullable=False)


with app.app_context():
    db.create_all()




@app.route('/')
def home():
    books = db.session.execute(db.select(Books).order_by(Books.id)).scalars()
    books_list= list(books)
    return render_template("index.html", books=books_list)


@app.route("/add", methods=["GET","POST"])
def add():
    if request.method=="POST":
        data = request.form
        title = data["title"]
        author = data["author"]
        rating = data["rating"]
        with app.app_context():
            new_book = Books(title=title, author=author, rating=rating)
            db.session.add(new_book)
            db.session.commit()
            return redirect(url_for("home"))
    return render_template("add.html")


@app.route("/edit/<int:id>", methods = ["GET", "POST"])
def edit(id):
    book = db.session.get(Books, id)
    if request.method=="POST":
        new_rating = request.form.get("rating")
        if book and new_rating:
            book.rating = float(new_rating)
            db.session.commit()
            return redirect(url_for('home'))
    return render_template("edit.html", book=book)

@app.route("/delete/<int:id>")
def delete(id):
    book = db.session.get(Books, id)
    if book:
        db.session.delete(book)
        db.session.commit()
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run(debug=True)

