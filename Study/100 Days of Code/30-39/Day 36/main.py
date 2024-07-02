import html
import json
import requests
import os
from dotenv import load_dotenv
from datetime import timedelta,datetime as dt
from newsapi import NewsApiClient
from twilio.rest import Client

load_dotenv()

STOCK = "TSLA"
COMPANY_NAME = "Tesla Inc"
TIME_FRAME = "60min"

today_date = dt.now().date()
yesterday_date = today_date - timedelta(days=1)
before_yesterday_date = today_date - timedelta(days=2)
yesterday = yesterday_date.strftime("%Y-%m-%d")
before_yesterday = before_yesterday_date.strftime("%Y-%m-%d")


api_key=os.getenv("ALPHA_API_KEY")
url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={STOCK}&apikey={api_key}'
r = requests.get(url)
data =r.json()

tesla_stock_yesterday = data["Time Series (Daily)"][yesterday]["1. open"]
tesla_stock_before_yesterday = data["Time Series (Daily)"][before_yesterday]["1. open"]

if abs(round(tesla_stock_yesterday*100/tesla_stock_before_yesterday-100, 2))>5:
  news_api_key = os.getenv("NEWS_API_KEY")
  newsapi = NewsApiClient(api_key=news_api_key)
  all_articles = newsapi.get_everything(q='tesla',
                                        sources='bbc-news,the-verge, cnn',
                                        domains='bbc.co.uk,techcrunch.com',
                                        from_param=before_yesterday,
                                        to=today_date,
                                        language='en',
                                        sort_by='relevancy',
                                        page=1)

if all_articles["totalResults"]>0:
  TWILIO_API_KEY = os.getenv("open_weather_api_key")
  account_sid = os.environ["TWILIO_ACCOUNT_SID"]
  auth_token = os.environ["TWILIO_AUTH_TOKEN"]
  MY_PHONE = os.environ["my_phone_number"]


for article in all_articles["articles"]:
  decoded_title = html.unescape(article['title'])
  client = Client(account_sid, auth_token)
  message = client.messages.create(body = decoded_title, from_="+18668627521", to=MY_PHONE)
  print(message.sid)
  print(message.status)
  print(message.body)
