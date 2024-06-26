from flask import Flask, render_template
import requests

posts = requests.get("https://api.npoint.io/1fe7a92029f9dec51c55").json()

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", posts=posts)


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/post")
def post():
    return render_template("sample_post.html",)

@app.route("/post/<int:id>")
def get_post(id):
    post = next((post for post in posts if post["id"] == id), None)
    if post:
        return render_template("post.html", post=post)
    else:
        return "Post not found", 404

@app.route("/contact")
def contact():
    return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True)
