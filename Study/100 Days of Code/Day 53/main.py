import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests

google_form_url = "https://docs.google.com/forms/d/e/1FAIpQLSdbMtbKt6nsBw8BMyo-78Wn_M8SPbCJ9gXpdNzJqHpNPUWqxQ/viewform?usp=sf_link"
form_url_viewform = "https://docs.google.com/forms/d/e/1FAIpQLSdbMtbKt6nsBw8BMyo-78Wn_M8SPbCJ9gXpdNzJqHpNPUWqxQ/viewform"
zillow_clone_url = "https://appbrewery.github.io/Zillow-Clone/"

html = requests.get(zillow_clone_url)

soup = BeautifulSoup(html.text, "html.parser")

listings = soup.find_all(
    "li", attrs={"class": "ListItem-c11n-8-84-3-StyledListCardWrapper"}
)

chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)
driver = webdriver.Chrome(options=chrome_options)

driver.get(google_form_url)


def add_info(address, price, link):
    address_input =  WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='mG61Hd']/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div[1]/div/div[1]/input")))
    address_input.send_keys(address)
    price_input = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='mG61Hd']/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[1]/input")))
    price_input.send_keys(price)
    link_input =  WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='mG61Hd']/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[1]/input")))
    link_input.send_keys(link)
    submit_button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//div[@role='button']//span[text()='Submit']")))
    submit_button.click()
    other_response = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.LINK_TEXT, "Submit another response")))
    other_response.click()


for li in listings:
    address = li.find("address", attrs={"data-test": "property-card-addr"}).text.strip()
    price = li.find("span", attrs={"data-test": "property-card-price"}).text.strip()
    link = li.find("a", attrs={"data-test": "property-card-link"})["href"]
    add_info(address, price, link)



