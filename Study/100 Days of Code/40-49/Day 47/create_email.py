from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from config import EMAIL, SEND_TO, PASSWORD
import smtplib


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


def send_email(msg):
    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as connection:
            connection.starttls()
            connection.login(user=EMAIL, password=PASSWORD)
            connection.sendmail(from_addr=EMAIL, to_addrs=SEND_TO, msg=msg.as_string())
        return  "Email sent successfully"
    except smtplib.SMTPException as e:
            return f"Error sending mail: {e}"
