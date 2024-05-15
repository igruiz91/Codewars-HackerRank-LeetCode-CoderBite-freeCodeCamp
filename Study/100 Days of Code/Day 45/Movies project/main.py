import requests
from bs4 import BeautifulSoup
import os

path = os.path.join(os.path.dirname(__file__), "movies.txt")


URL = "https://web.archive.org/web/20200518073855/https://www.empireonline.com/movies/features/best-movies-2/"

# Write your code below this line 👇
response = requests.get(URL)
html = response.content.decode('utf-8')

soup = BeautifulSoup(html, "html.parser")
h3 = soup.find_all(name="h3", class_="title")


movies_title = [movie.getText() for movie in h3][::-1]

with open(path, mode ="w") as f:
  for movie in movies_title:
    f.write(f"{movie}\n")
