import requests
from datetime import datetime

MY_LAT = 26.142036
MY_LONG = -81.794807

date = datetime.now()
print(date)

parameters ={
  "lat":MY_LAT,
  "lng":MY_LONG,
  "formatted": 0
}

response = requests.get(f'https://api.sunrise-sunset.org/json' , params=parameters)
response.raise_for_status()
data = response.json()
print(data)
