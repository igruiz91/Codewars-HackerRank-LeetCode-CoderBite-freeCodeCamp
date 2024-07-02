from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy
from Cafe import Base, Cafe

import os
import random
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# CREATE DB

# Connect to Database
db_name = "cafes.db"
db_route = os.path.join(os.path.dirname(__file__), "instance", db_name)
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_route}"
db = SQLAlchemy(model_class=Base)
db.init_app(app)


with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/random")
def get_random_cafe():
    cafes = db.session.execute(db.select(Cafe)).scalars().all()
    cafe = random.choice(cafes)
    return jsonify(cafe.to_dict())


# HTTP GET - Read Record
@app.route("/all")
def get_all_cafes():
    cafes = db.session.execute(db.select(Cafe)).scalars().all()

    return jsonify(cafes=[ cafe.to_dict() for cafe in cafes ])


@app.route("/search")
def search_by_location():
    location = request.args.get("loc")
    cafes = (
        db.session.execute(db.select(Cafe).where(Cafe.location == location))
        .scalars()
        .all()
    )
    if cafes:
        return jsonify(cafes=[cafe.to_dict() for cafe in cafes])
    else:
        return jsonify(error={"Not Found": "Sorry, we don't have a cafe at that location."}), 404


# HTTP POST - Create Record
@app.route("/add", methods = ["POST"])
def add_cafe():
    data = request.form
    new_cafe = Cafe(
        name=data.get("name"),
        map_url=data.get("map_url"),
        img_url=data.get("img_url"),
        location=data.get("loc"),
        has_sockets=bool(data.get("sockets")),
        has_toilet=bool(data.get("toilet")),
        has_wifi=bool(data.get("wifi")),
        can_take_calls=bool(data.get("calls")),
        seats=data.get("seats"),
        coffee_price=data.get("coffee_price"),
    )
    try:
        db.session.add(new_cafe)
        db.session.commit()
        return jsonify(response={"success": "Successfully added the new cafe."})
    except ValueError:
        return {"error": "unexpected error"}

# HTTP PUT/PATCH - Update Record
@app.route("/update-price/<int:cafe_id>", methods = ["PATCH"])
def update_price(cafe_id):
    cafe = db.get_or_404(Cafe, cafe_id)
    new_price = request.args.get("new_price")
    if cafe:
        cafe.coffee_price = new_price
        db.session.commit
        return jsonify(success = "Successfully updated the price.")
    else:
        return  jsonify(error={"Not Found": "Sorry a cafe with that id was not found in the database."}), 404


# HTTP DELETE - Delete Record
@app.route("/report-closed/<int:cafe_id>", methods = ["DELETE"])
def delete_cafe(cafe_id):
    api_key= request.args.get("api-key")
    if api_key == os.getenv["SECRET_API_KEY_CAFE"]:
        cafe = db.get_or_404(Cafe, cafe_id)
        if cafe:
            db.session.delete(cafe)
            db.session.commit()
            return jsonify(response={"success": "Successfully deleted the cafe from the database."}), 200
        else:
            return  jsonify(error={"Not Found": "Sorry a cafe with that id was not found in the database."}), 404
    else:
        return  jsonify(error={"Not Found": "Sorry that's not allowed. Make sure you have the correct api_key."}), 403

if __name__ == '__main__':
    app.run(debug=True)
