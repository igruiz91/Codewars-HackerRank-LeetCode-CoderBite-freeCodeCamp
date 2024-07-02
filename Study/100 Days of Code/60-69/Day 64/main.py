from flask import Flask, render_template, redirect, url_for, request
from flask_bootstrap import Bootstrap5
from flask_sqlalchemy import SQLAlchemy
import requests
import os
from Movie import Base, Movie, EditRatingMovieForm, TitleMovieForm
from dotenv import load_dotenv

load_dotenv()
ACCESS_TOKEN= os.environ.get("API_READ_ACCESS_TOKEN")

app = Flask(__name__)
app.config['SECRET_KEY'] = '8BYkEfBA6O6donzWlSihBXox7C0sKR6b'
Bootstrap5(app)

# CREATE DB
db_name = "movies.db"
db_route = os.path.join(os.path.dirname(__file__), db_name)
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_route}"
db = SQLAlchemy(model_class=Base)
db.init_app(app)



# CREATE TABLE
with app.app_context():
    db.create_all()


@app.route("/")
def home():
    movies_default_rank = db.session.execute(
        db.select(Movie).filter(Movie.ranking == 0).order_by(Movie.rating.desc())
    ).scalars().all()

    if movies_default_rank:

        for i, movie in enumerate(movies_default_rank, start=1):
            print(movie)
            movie.ranking = i
        db.session.commit()

    movies = db.session.execute(db.select(Movie).order_by(Movie.ranking.asc())).scalars().all()
    return render_template("index.html", movies=movies)

@app.route("/edit/<int:id>", methods=["GET","POST"])
def edit(id):
    movie = db.session.get(Movie, id)
    form = EditRatingMovieForm()
    if form.validate_on_submit():
        movie.rating=form.rating.data
        movie.review=form.review.data
        db.session.commit()
        return redirect(url_for('home'))
    return render_template("edit.html", form=form)

@app.route("/add/<int:id>", methods = ["GET", "POST"])
def add_film(id):
    if request.method=="GET":
        url = f"https://api.themoviedb.org/3/movie/{id}?language=en-US"
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {ACCESS_TOKEN}",
        }
        response = requests.get(url, headers=headers).json()
        new_movie = Movie(
            title=response["title"],
            year=response["release_date"],
            description=response["overview"],
            rating=response["vote_average"],
            ranking=0,
            review=response["tagline"],
            img_url=f"https://image.tmdb.org/t/p/w500{response['poster_path']}",
        )
        with app.app_context():
            db.session.add(new_movie)
            db.session.commit()
            new_movie_id = new_movie.id
        return redirect(url_for("edit", id=new_movie_id))


@app.route("/add", methods = ["GET", "POST"])
def add():
    form = TitleMovieForm()

    if form.validate_on_submit():
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {ACCESS_TOKEN}",
        }

        response = requests.get(
            url=f"https://api.themoviedb.org/3/search/movie?query={form.title.data}&include_adult=true&language=en-US&page=1",
            headers=headers,
        ).json()
        film_list = response["results"]
        return render_template("add.html", films=film_list )

    return render_template("add.html", form=form)

@app.route("/delete/<int:id>")
def delete(id):
    movie = db.session.get(Movie, id)
    if movie:
        db.session.delete(movie)
        db.session.commit()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
