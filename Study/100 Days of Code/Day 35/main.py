from dotenv import load_dotenv
import os
import requests
from twilio.rest import Client


load_dotenv()
API_KEY = os.getenv("open_weather_api_key")
account_sid = os.environ["TWILIO_ACCOUNT_SID"]
auth_token = os.environ["TWILIO_AUTH_TOKEN"]
MY_PHONE = os.environ["my_phone_number"]

q = "Naples,US"
MY_LATITUDE = 26.142036
MY_LONGITUDE = -81.794807

params = {
  "lat":MY_LATITUDE,
  "lon":MY_LONGITUDE,
  "cnt":4,
  "appid":API_KEY
}

request = requests.get(url = f"https://api.openweathermap.org/data/2.5/forecast?", params=params)
request.raise_for_status()
weather_data =request.json()

for  report in weather_data["list"]:
  if report["weather"][0]["id"]<900:
    client = Client(account_sid, auth_token)
    message = client.messages.create(body="Get a ☂️ for today...",
              from_= "+18668627521",
              to="Your verified number" )
    print(message.sid)
    print(message.status)
    break
