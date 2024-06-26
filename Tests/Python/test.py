obj = [
  {
    "id": 4,
    "body": "Spaghetti squash avocado radicchio coriander pumpkin shallot maize black-eyed pea chard. Swiss chard napa cabbage celery garlic brussels sprout onion spinach. Pumpkin turnip cauliflower, bitterleaf maize scallion silver beet parsley soko dandelion.",
    "title": "Vegetable Medley",
    "subtitle": "An exploration of delicious and nutritious vegetables.",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Vegetable_garden.jpg/1200px-Vegetable_garden.jpg"
  },
  {
    "id": 5,
    "body": "Cat ipsum dolor sit amet, meow at the dishwasher chew foot. Run outside as soon as door open scratch at the door then walk away. Meow all night having their mate disturbing sleeping humans lick master's hand at first then bite because im purring too hard and love you too much!",
    "title": "Understanding Your Cat's Behavior",
    "subtitle": "A deep dive into the quirky and amusing behaviors of cats.",
    "image_url": "https://cdn.pixabay.com/photo/2016/03/09/09/22/cat-1246659_1280.jpg"
  },]


def post(id):
    post = next((post for post in obj if post["id"] == id), None)
    return post


print(post(4))
