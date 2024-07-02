from wtforms import StringField, SubmitField, SelectField, TimeField, URLField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired


class CafeForm(FlaskForm):
    cafe = StringField("Cafe name", validators=[DataRequired()])
    location = URLField(
        "Cafe Location on Google Maps(URL)", validators=[DataRequired()]
    )
    open = TimeField("Opening Time e.g. 8AM", validators=[DataRequired()])
    close = TimeField("Closing Time e.g. 9PM", validators=[DataRequired()])
    rating_coffee = SelectField(
        "Coffee Rating",
        choices=["☕", "☕☕", "☕☕☕", "☕☕☕☕", "☕☕☕☕☕"],
        validators=[DataRequired()],
    )
    rating_wifi = SelectField(
        "Wifi Strength Rating",
        choices=["✘", "💪", "💪💪", "💪💪💪", "💪💪💪💪", "💪💪💪💪💪"],
        validators=[DataRequired()],
    )
    rating_power = SelectField(
        "Wifi Strength Rating",
        choices=["✘" ,"🔌", "🔌🔌", "🔌🔌🔌", "🔌🔌🔌🔌", "🔌🔌🔌🔌🔌"],
        validators=[DataRequired()],
    )
    submit = SubmitField("Submit")
