import time
import requests
from datetime import datetime
import smtplib
from dotenv import load_dotenv
import os

load_dotenv()
password = os.getenv("pass")

MY_LAT = 26.142036
MY_LONG = -81.794807
MY_EMAIL = "igruiz91@gmail.com"

time_now = datetime.now()

def trim_data(json,position):
  return int(json['results'][position].split("T")[1].split(":")[0])
def is_iss_overhead():
  response = requests.get(url="http://api.open-notify.org/iss-now.json")
  response.raise_for_status()
  data = response.json()
  iss_latitude = float(data["iss_position"]["latitude"])
  iss_longitude = float(data["iss_position"]["longitude"])
  if MY_LAT-5 <= iss_latitude <= MY_LAT+5 and MY_LONG-5 <= iss_longitude <= MY_LONG+5:
    return True



def is_night():
  parameters ={
    "lat":MY_LAT,
    "lng":MY_LONG,
    "formatted": 0
  }
  response = requests.get('https://api.sunrise-sunset.org/json' , params=parameters)
  response.raise_for_status()
  data = response.json()
  sunrise = trim_data(data,"sunrise")
  sunset = trim_data(data,"sunset")

while True:
  time.sleep(3600)
  with smtplib.SMTP("smtp.gmail.com", 587) as connection:
    connection.starttls()
    connection.login(MY_EMAIL, password)

    if is_iss_overhead() and is_night() :
      connection.sendmail(from_addr=MY_EMAIL, to_addrs="igonzruiz91@gmail.com",
                              msg="Subject: Look Up\n\nThe ISS is above you in the sky")
    # else:
    #   connection.sendmail(from_addr=MY_EMAIL, to_addrs="igonzruiz91@gmail.com", msg="Subject:Not today\nSorry today you dont see the ISS")

