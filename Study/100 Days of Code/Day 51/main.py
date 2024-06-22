from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import os
from dotenv import load_dotenv

load_dotenv()

PROMISED_DOWN = 900
PROMISED_UP = 100
TWITTER_EMAIL = os.getenv("mail")
TWITTER_PASSWORD = os.getenv("TWITTER_PASSWORD")
TWITTER_USERNAME = os.getenv("TWITTER_USERNAME")
INTERNET_PROVIDER = "@InternetProvider123"

class InternetSpeedTwitterBot:
    def __init__(self):
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_experimental_option("detach", True)
        self.driver = webdriver.Chrome(options=chrome_options)
        self.up = 0
        self.down =0

    def get_internet_speed(self):
        speed_test_url = "https://www.speedtest.net/"
        self.driver.get(speed_test_url)

        go_button = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".start-button a"))
        )
        go_button.click()

        results_container = WebDriverWait(self.driver, 120).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '.result-container-speed.result-container-speed-active'))
        )

        download = results_container.find_element(By.CSS_SELECTOR, "span.download-speed")
        upload = results_container.find_element(By.CSS_SELECTOR, "span.upload-speed")

        self.down = float(download.text)
        self.up = float(upload.text)

    def create_tweet(self):
        msg = f"Hey {INTERNET_PROVIDER}, why is my internet speed\n{self.down}down/{self.up}up when i pay for {PROMISED_DOWN}down/{PROMISED_UP}up?"

        tweet_textarea = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, 'div[aria-label="Texto del post"]'))
        )
        tweet_textarea.send_keys(msg)

        create_new_tweet = self.driver.find_element(
            By.CSS_SELECTOR, 'button[data-testid="tweetButtonInline"]'
        )
        create_new_tweet.click()

    def tweet_at_provider(self):
        if self.down>PROMISED_DOWN or self.up>PROMISED_UP:
            return
        x_url = "https://x.com/home"
        self.driver.get(x_url)

        sign_in = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "[data-testid='loginButton']")))
        sign_in.click()

        input_email = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "input[name='text']")))
        input_email.send_keys(TWITTER_EMAIL)
        input_email.send_keys(Keys.ENTER)

        input_user = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "input[data-testid='ocfEnterTextTextInput']")))
        input_user.send_keys(TWITTER_USERNAME)
        input_user.send_keys(Keys.ENTER)

        input_password = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "input[name='password']")))
        input_password.send_keys(TWITTER_PASSWORD)
        input_password.send_keys(Keys.ENTER)

        self.create_tweet()



bot = InternetSpeedTwitterBot()
bot.get_internet_speed()
bot.tweet_at_provider()
