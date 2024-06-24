from datetime import datetime
import random
from flask import Flask, render_template
import requests

app = Flask(__name__)

YOUR_NAME="igruiz91"
CURRENT_YEAR = datetime.now().year

@app.route('/')
def home():
    random_number = random.randint(1,100)
    return render_template("index.html", num=random_number, year=CURRENT_YEAR, name = YOUR_NAME)


@app.route('/guess/<name>')
def guess(name):
    res_gender = requests.get(f"https://api.genderize.io?name={name}")
    res_age = requests.get(f"https://api.agify.io?name={name}")
    gender_data = res_gender.json()
    age_data = res_age.json()
    gender = gender_data["gender"]
    age = age_data["age"]
    return render_template("guess.html", name=name, gender=gender, age=age)


@app.route('/blog')
def blog():
    blog_url = "https://api.npoint.io/c790b4d5cab58020d391"
    res_blog = requests.get(blog_url)
    blog_data = res_blog.json()
    return render_template("blog.html", posts=blog_data )



if __name__ == "__main__":
    app.run(debug=True)


