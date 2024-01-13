import requests
from datetime import datetime as dt

#Creating new user in pixela
pixela_url_endpoint ="https://pixe.la/v1/users"
USERNAME = "igruiz91"
PIXELA_TOKEN = "abcxzcqwe123trewq"
GRAPH_ID = "programming1"

params ={
  "token": PIXELA_TOKEN,
  "username": USERNAME,
  "agreeTermsOfService":"yes",
  "notMinor": "yes",
}

headers = {
  "X-USER-TOKEN": PIXELA_TOKEN
}
# response  = requests.post(url=pixela_url_endpoint, json=params)
# print(response.text)

graph_url = f"{pixela_url_endpoint}/{USERNAME}/graphs"
graph_config = {
  "id": GRAPH_ID,
  "name": "Programming Study Graph",
  "unit": "hours",
  "color": "kuro",
  "type": "float",
}

# response = requests.post(graph_url, json=graph_config, headers=headers)
# print(response.text)

today = dt.now().date().strftime("%Y%m%d")
graph_pixel_url = f"{graph_url}/{GRAPH_ID}"
pixel_data = {
  "date": today,
  "quantity": "5",
}
response = requests.post(graph_pixel_url, json=pixel_data, headers=headers)
print(response.text)

#Update the graph
pixel_new_data = {
  "color": "shibafu",
}
# response = requests.put(graph_pixel_url, json=pixel_new_data, headers=headers)
