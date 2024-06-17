import requests
from bs4 import BeautifulSoup
import smtplib
from create_email import create_email, EMAIL, PASSWORD, SEND_TO

def send_email(request):
    amazon_url = "https://www.amazon.com/dp/B086H3YYDK?linkCode=ssc&tag=onamzjwhitney-20&creativeASIN=B086H3YYDK&asc_item-id=amzn1.ideas.2X6VEW142NG7L&ref_=aip_sf_list_spv_ofs_mixed_d_asin"

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        "Accept-Language": "en,en-US;q=0.9,it-IT;q=0.8,it;q=0.7,es;q=0.6",
    }

    html = requests.get(amazon_url, headers=headers)

    soup = BeautifulSoup(html.text, "html.parser")
    # other method
    # soup = BeautifulSoup(html.content, "lxml")


    product_title = soup.find("span", attrs={"id": "productTitle"}).text.strip()
    product_price = float(
        soup.find("div", attrs={"id": "corePriceDisplay_desktop_feature_div"})
        .select("span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay")
        .pop()
        .text.strip()[1:]
    )

    if product_price <= 700:
        msg = create_email(product_title, product_price, amazon_url)
        try:
            with smtplib.SMTP("smtp.gmail.com", 587) as connection:
                connection.starttls()
                connection.login(user=EMAIL, password=PASSWORD)
                connection.sendmail(from_addr=EMAIL, to_addrs=SEND_TO, msg=msg.as_string())
            return  "Email send successfully"
        except smtplib.SMTPException as e:
            return f"Error sending mail: {e}"
