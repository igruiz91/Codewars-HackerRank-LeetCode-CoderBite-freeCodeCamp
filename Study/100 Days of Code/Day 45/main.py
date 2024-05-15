from bs4 import BeautifulSoup
import os


website = os.path.join(os.path.dirname(__file__), "website.html")


with open(website) as file:
  html = file.read()

soup = BeautifulSoup(html, 'html.parser')
print(soup)
