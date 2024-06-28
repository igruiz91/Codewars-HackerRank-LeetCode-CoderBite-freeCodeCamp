from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from flask import Flask, render_template, request
import requests
import smtplib
import os
from dotenv import load_dotenv

posts = requests.get("https://api.npoint.io/1fe7a92029f9dec51c55").json()

app = Flask(__name__)


def send_email(name, email,phone, message):
    load_dotenv()
    EMAIL = os.environ.get("email")
    PASSWORD = os.environ.get("password")
    SEND_TO = os.environ.get("mail")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Contact message from My Blog"
    msg["From"] = email
    msg["To"] = EMAIL
    html_content = f"""
    <html>
        <body>
            <p>{message}
            </p>
            <hr>
            <p>This is my contact:</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </body>
    </html>
    """
    msg.attach(MIMEText(html_content, "html"))


    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as connection:
            connection.starttls()
            connection.login(user=EMAIL, password=PASSWORD)
            connection.sendmail(from_addr=EMAIL, to_addrs=SEND_TO, msg=msg.as_string())
        return  "Email sent successfully"
    except smtplib.SMTPException as e:
            return f"Error sending mail: {e}"

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

@app.route("/contact", methods=["GET","POST"])
def contact():
    if request.method=="POST":
        data = request.form
        name=data["name"]
        email=data["email"]
        phone=data["phone"]
        message=data["message"]

        resp =  send_email(name, email, phone, message)
        return f"<h1>{resp}</h1>"
    return render_template("contact.html")



if __name__ == "__main__":
    app.run(debug=True)
