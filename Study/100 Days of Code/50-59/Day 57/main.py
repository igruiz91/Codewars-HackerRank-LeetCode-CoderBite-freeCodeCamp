from flask import Flask, render_template
import requests
from post import Post

posts = requests.get("https://api.npoint.io/c790b4d5cab58020d391").json()
post_object = []
for post in posts:
    post_object.append(Post(post["id"], post["title"], post["subtitle"], post["body"]))

app = Flask(__name__)


@app.route("/")
def blog():
    return render_template("index.html", posts=post_object)

@app.route("/post/<int:id>")
def get_post(id):
    req_post = None
    for post in post_object:
        if post.id == id:
            req_post=post
            break
    return render_template("post.html", id=id, post=req_post)


if __name__ == "__main__":
    app.run(debug=True)
