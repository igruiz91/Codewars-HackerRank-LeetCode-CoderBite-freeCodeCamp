from bs4 import BeautifulSoup
import requests


response = requests.get("https://news.ycombinator.com/")
yc_web_page = response.text


soup = BeautifulSoup(yc_web_page, "html.parser")
first_new = soup.find(name="span", class_="titleline")
article_link= first_new.find(name="a")
print(first_new.text)
print(article_link.get("href"))
