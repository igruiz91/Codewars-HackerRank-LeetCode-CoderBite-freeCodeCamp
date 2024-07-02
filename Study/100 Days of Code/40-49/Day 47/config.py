import os
from dotenv import load_dotenv

load_dotenv()

PROXYCRAWL_TOKEN = os.environ.get("PROXYCRAWL_TOKEN")
EMAIL = os.environ.get("email")
PASSWORD = os.environ.get("password")
SEND_TO = "igonzruiz91@gmail.com"
