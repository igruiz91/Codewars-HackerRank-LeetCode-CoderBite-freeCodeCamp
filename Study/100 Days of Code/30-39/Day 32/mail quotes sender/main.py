import smtplib
import os
from dotenv import load_dotenv
import datetime as dt
import random

load_dotenv()
quotes_txt = os.path.join(os.path.dirname(__file__), "quotes.txt")
date = dt.datetime.now()

if date.weekday() == 0:
  with open(quotes_txt) as f:
    quotes = f.read().split('\n')

  day_quote = random.choice(quotes)

  my_email = 'igruiz91@gmail.com'
  password = os.getenv("pass")

  with smtplib.SMTP("smtp.gmail.com", 587) as connection:
    connection.starttls()
    connection.login(user=my_email, password=password)
    connection.sendmail(from_addr=my_email, to_addrs="igonzruiz91@gmail.com", msg=f"Subject:Day Quote\n\n{day_quote}")
