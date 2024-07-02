from flask import Flask
import random

app = Flask(__name__)


def generate_num():
    return random.randint(0,9)

SECRET_NUM=generate_num()

@app.route("/")
def home():
    return (
        "<h1>Guess a number between 0 and 9</h1>"
        + "<img src='https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif' >"
    )

@app.route("/<int:num>")
def check_number(num):
    if num>SECRET_NUM:
        return (
            "<h1>Too high, try again!</h1>"
            + "<img src='https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif' >"
        )
    if num<SECRET_NUM:
        return (
            "<h1>Too low, try again!</h1>"
            + "<img src='https://media.giphy.com/media/jD4DwBtqPXRXa/giphy.gif' >"
        )
    return (
        "<h1>You found me!</h1>"
        + "<img src='https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif' >"
    )

if __name__ == "__main__":
    app.run(debug=True)
