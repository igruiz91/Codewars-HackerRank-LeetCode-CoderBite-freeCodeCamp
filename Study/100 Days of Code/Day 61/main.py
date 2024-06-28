from flask import Flask, render_template, request
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired,Email, Length
from wtforms import PasswordField, SubmitField, EmailField
import os
from dotenv import load_dotenv
from flask_bootstrap import Bootstrap5


load_dotenv()
FORM_EMAIL= os.getenv("FORM_EMAIL")
FORM_PASSWORD= os.getenv("FORM_PASSWORD")

class LoginForm(FlaskForm):
    email = EmailField(label="Email", validators=[DataRequired(), Email()])
    password = PasswordField(label="Password", validators=[DataRequired(),Length(min=8)])
    submit = SubmitField(label="Log In")


app = Flask(__name__)
app.secret_key= "some secret key string"


bootstrap = Bootstrap5(app)


@app.route("/")
def home():
    return render_template('index.html')

@app.route("/login", methods = ["GET", "POST"])
def login():
    login_form = LoginForm()

    if login_form.validate_on_submit():
        if login_form.email.data == FORM_EMAIL and login_form.password.data == FORM_PASSWORD:
            return render_template("success.html")
        else:
            return render_template("denied.html")

    return render_template('login.html', form=login_form)


if __name__ == '__main__':
    app.run(debug=True)
