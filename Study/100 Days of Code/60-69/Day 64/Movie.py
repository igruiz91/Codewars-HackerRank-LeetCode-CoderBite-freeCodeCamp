from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String, Float
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, FloatField
from wtforms.validators import DataRequired


class Base(DeclarativeBase):
    pass


class Movie(Base):
    __tablename__ = 'movies'

    id: Mapped[int]= mapped_column(Integer, primary_key=True)
    title: Mapped[str]= mapped_column(String(250), unique=True, nullable=False)
    year: Mapped[int]= mapped_column(Integer, nullable=False)
    description: Mapped[str]= mapped_column(String(250), nullable=False)
    rating: Mapped[float] = mapped_column(Float, nullable=False)
    ranking: Mapped[int]= mapped_column(Integer)
    review: Mapped[str]= mapped_column(String(250) )
    img_url: Mapped[str] = mapped_column(String(250), nullable=False)



class EditRatingMovieForm(FlaskForm):
    rating = FloatField("Your rating out of 10 e.g. 7.5", validators=[DataRequired()])
    review = StringField(
        "Your review", validators=[DataRequired()]
    )
    submit = SubmitField("Done")

class TitleMovieForm(FlaskForm):
    title = StringField(
        "Movie Title", validators=[DataRequired()]
    )
    submit = SubmitField("Add Movie")
