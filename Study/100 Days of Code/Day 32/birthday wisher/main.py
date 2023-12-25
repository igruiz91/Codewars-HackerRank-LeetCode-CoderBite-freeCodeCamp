import datetime as dt
import pandas
import os
import random
import smtplib
from dotenv import load_dotenv

load_dotenv()

email = "igruiz91@gmail.com"
password = os.getenv("pass")

route = os.path.dirname(__file__)
birthdays_csv = os.path.join(route, 'birthdays.csv')
letters_route = os.path.join(route, "letter_templates")

birthdays = pandas.read_csv(birthdays_csv)


date = dt.datetime.now()

for index, birthday in birthdays.iterrows():
  if(date.month == birthday["month"] and date.day == birthday["day"]):

    txt = os.listdir(letters_route)

    with open(os.path.join(letters_route, random.choice(txt))) as f:
      content = f.read()
      content_edition = content.replace("[NAME]", birthday["name"])


    with smtplib.SMTP("smtp.gmail.com", 587) as connection:
      connection.starttls()
      connection.login(user=email, password=password)
      connection.sendmail(
        from_addr=email,
        to_addrs=birthday["email"],
        msg=f"Subject:Happy birthday!!\n{content_edition}")





