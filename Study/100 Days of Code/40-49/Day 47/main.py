from scraper import scrape_amazon_product, AMAZON_URL
from create_email import create_email, send_email


def main():

    try:
        product_title, product_price = scrape_amazon_product()
        if product_price <= 900:
            msg = create_email(product_title, product_price, AMAZON_URL)
            result = send_email(msg)
            print(result)
        else:
            print("Price is above the threshold")
    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()
