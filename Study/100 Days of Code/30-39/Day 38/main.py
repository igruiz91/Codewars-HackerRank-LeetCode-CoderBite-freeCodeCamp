import requests
import os
from  dotenv import load_dotenv
import json
from datetime import datetime as dt


current_date = dt.now()
time = current_date.time().strftime("%H:%M:%S")
date = current_date.date().strftime("%d/%m/%Y")

load_dotenv()

app_id = os.getenv("NUTRITIONIX_APP_ID")
app_key = os.getenv("NUTRITIONIX_API_KEY")
sheety_url = os.getenv("SHEETY_URL")
sheety_bearer = os.getenv("SHEETY_BEARER")


exercise =input("Enter the exercise you did: ")

url = "https://trackapi.nutritionix.com"
endpoint = "/v2/natural/exercise"
headers = {
  "x-app-id": app_id,
  "x-app-key": app_key
}

body = {
  "query" : exercise,
  "weight_kg": 80,
  "weight_kg": 177,
  "age": 32,
}




response = requests.post(url=f"{url}{endpoint}", headers=headers, json=body)
response.raise_for_status()
exercise_data = response.json()

workouts = [{"date": date,"time": time,"exercise": e["user_input"], "duration": e["duration_min"], "calories": e["nf_calories"] } for e in exercise_data["exercises"]]
headers = {
  "Authorization": sheety_bearer
}

for workout in workouts:
  body = {
    "workout" : workout
  }
  response = requests.post(url=f"https://api.sheety.co/{sheety_url}/workouts/workouts", headers=headers, json=body)
  response.raise_for_status()

