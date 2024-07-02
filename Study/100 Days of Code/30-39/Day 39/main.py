from data_manager import DataManager
from flight_search import FlightSearch
from datetime import timedelta, datetime as dt
from notification_manager import NotificationManager

ORIGIN_CITY_IATA = "HAV"

data_manager = DataManager()
flight_search= FlightSearch()
notification_manager = NotificationManager()

sheet_data = data_manager.get_destination_cities()


for row in sheet_data:
  if row["iataCode"]=="":
    row["iataCode"]=flight_search.get_destination_code(row["city"])
  data_manager.destination_data = sheet_data
  data_manager.update_IATA_Code()

tomorrow = dt.now()+timedelta(days=1)
six_months_for_today = dt.now()+timedelta(days=180)


for destination in sheet_data:
  flight = flight_search.check_flights(
    ORIGIN_CITY_IATA,
    destination["iataCode"],
    from_time=tomorrow,
    to_time=six_months_for_today)


  if flight.price < destination["lowestPrice"]:
      notification_manager.send_sms(
          message=f"Low price alert! Only ${flight.price} to fly from {flight.origin_city}-{flight.origin_airport} to {flight.destination_city}-{flight.destination_airport}, from {flight.out_date} to {flight.return_date}."
      )
