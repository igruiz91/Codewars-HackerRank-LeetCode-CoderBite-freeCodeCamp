import requests
import os
from dotenv import load_dotenv

load_dotenv()

SHEET_CODE = os.environ["SHEETY_FLIGHTS_URL"]
SHEETY_PRICES_ENDPOINT = f"https://api.sheety.co/{SHEET_CODE}/flightDeals/prices"

class DataManager:
    def __init__(self):
      self.destination_data = {}

    def get_destination_cities(self):
      response = requests.get(url=SHEETY_PRICES_ENDPOINT)
      response.raise_for_status()
      data = response.json()
      self.destination_data = data["prices"]
      return self.destination_data

    def update_IATA_Code(self):
      for city in self.destination_data:
        new_data = {
            "price": {
                "iataCode": city["iataCode"]
            }
        }
        response = requests.put(
            url=f"{SHEETY_PRICES_ENDPOINT}/{city['id']}",
            json=new_data
        )
        print(response.text)



