# %%
from bs4 import BeautifulSoup
import requests
from spotify import spotify_create_list

date=input("Which year do you want to travel to? Type the date in this format YYYY-MM-DD: ")
year, month, day = date.split('-')

def get_billboard_top100_data(year, month, day):
    billboard_url = f"https://www.billboard.com/charts/hot-100/{year}-{month}-{day}/"
    html = requests.get(billboard_url).content

    soup = BeautifulSoup(html, "html.parser")
    li_song_author = soup.select("li.o-chart-results-list__item")
    top_artist_songs = []
    for li in li_song_author:
        h3 = li.find("h3")
        span = li.find("span")
        if h3 and span:
            top_artist_songs.append((span.text.strip(), h3.text.strip()))

    return top_artist_songs


top_songs = get_billboard_top100_data(year, month, day)
new_list_time = spotify_create_list(year, month, top_songs)

print(new_list_time)
