import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv

load_dotenv()

# EMAIL = os.environ["email"]
# PASSWORD = os.environ["password"]
EMAIL = os.getenv("email")
PASSWORD = os.getenv("password")
SEND_TO = "igonzruiz91@gmail.com"

def create_email(product_title, product_price, amazon_url):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Amazon Price Alert!!!"
    msg["From"] = EMAIL
    msg["To"] = SEND_TO

    html_content = f"""
    <html>
        <body>
            <p>{product_title} price is down to ${product_price} <br>
            Go check your product in this link: <a href='{amazon_url}'>{product_title}</a><br>
            Hurry up!!
            </p>
        </body>
    </html>
    """
    msg.attach(MIMEText(html_content, "html"))
    return msg
