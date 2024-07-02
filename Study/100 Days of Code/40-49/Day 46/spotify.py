import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv

load_dotenv()
route = os.path.dirname(__file__)

def read_token(file_path):
    try:
        with open(os.path.join(file_path, "token.txt"), "r") as file:
            auth_token = file.read()
            return auth_token if auth_token != "" else None
    except FileNotFoundError:
        return None

def authenticate_spotify():
    CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
    CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
    auth_manager = SpotifyOAuth(
            CLIENT_ID,
            CLIENT_SECRET,
            redirect_uri="http://example.com",
            scope="playlist-modify-private",
            show_dialog=True,
    )
    auth_url = auth_manager.get_authorize_url()
    print(f"Please open this link: {auth_url}")
    auth_token = input("Enter the URL you were redirected to: ")
    code = auth_manager.parse_auth_response_url(auth_token)
    token = auth_manager.get_access_token(code)
    access_token = token["access_token"]

    with open(os.path.join(route, "token.txt"), "w") as file:
        file.write(access_token)

    sp = spotipy.Spotify(auth=access_token)

    return sp

def oauth_process():
    route = os.path.dirname(__file__)
    access_token = read_token(route)

    if access_token:
        try:
            sp = spotipy.Spotify(auth=access_token)
            sp.current_user()
            return sp
        except spotipy.SpotifyException:
                print("Token expired, re-authenticating...")
                sp = authenticate_spotify()
                return sp

def create_playlist(sp, user_id, year, month):
    playlist_name = f"Billboard top 100 {year}-{month}."
    playlist_description = "Top 100 from date: of the billoard top 100 song list"
    playlist = sp.user_playlist_create(user = user_id, name=playlist_name, public=False, description=playlist_description)
    return playlist

def spotify_create_list(year, month, top_songs):
    sp = oauth_process()
    user_id = sp.current_user()["id"]

    track_uris = []
    for artist, song in top_songs:
        try:
            search = sp.search(q=f"track:{song} artist:{artist}", type="track", limit=1)
            tracks = search["tracks"]["items"]
            if tracks:
                uri=tracks[0]['uri']
                track_uris.append(uri)
        except IndexError:
            print(f"{song} from {artist} doesn't exist in Spotify")

    playlist = create_playlist(sp, user_id, year, month)
    if track_uris:
        sp.user_playlist_add_tracks(user=user_id, playlist_id=playlist["id"],tracks=track_uris)
    return playlist








# req = requests.put("https://api.spotify.com/v1/playlists/{playlist_id}/followers")
# status = sp.current_user_follow_playlist("6UeSakyzhiEt4NB3UAd6NQ")

# https://example.com/?code=AQDTOJ1Wj1iIPZAyw8Y98cs_UaZt5FWtJcYrmxM38NCWnQu8J7n7ykU9nVykQr6-IDn2fYxnQpMFu9wjDva47xa-RatNCJHuKncACEEDnRgTQMu1DlbWvISxaIrXvf8hF5vqMS_LumBvy6TVY6-7BkrrhwuPl4M7tcvM8Zpt-5FtD9n1r5XgkpuKdd6pQtE
