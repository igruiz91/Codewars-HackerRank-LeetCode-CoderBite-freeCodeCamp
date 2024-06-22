import requests
from bs4 import BeautifulSoup
from config import PROXYCRAWL_TOKEN

AMAZON_URL = "https://www.amazon.com/dp/B086H3YYDK?linkCode=ssc&tag=onamzjwhitney-20&creativeASIN=B086H3YYDK&asc_item-id=amzn1.ideas.2X6VEW142NG7L&ref_=aip_sf_list_spv_ofs_mixed_d_asin"


def scrape_amazon_product():

    proxycrawl_url = (
        f"https://api.proxycrawl.com/?token={PROXYCRAWL_TOKEN}&url={AMAZON_URL}"
    )
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        "Accept-Language": "en,en-US;q=0.9,it-IT;q=0.8,it;q=0.7,es;q=0.6",
    }

    response = requests.get(proxycrawl_url, headers=headers)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    product_title = soup.find("span", attrs={"id": "productTitle"})
    if product_title:
        product_title = product_title.text.strip()
    else:
        raise ValueError("Something goes wrong... Product not found")

    product_price = soup.find(
        "div", attrs={"id": "corePriceDisplay_desktop_feature_div"}
    )
    if product_price:
        price = product_price.select_one(
            "span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay"
        )
        if price:
            product_price = float(price.text.strip()[1:])
        else:
            raise ValueError("Product price not found")
    else:
        raise ValueError("Price div not found")

    return product_title, product_price
