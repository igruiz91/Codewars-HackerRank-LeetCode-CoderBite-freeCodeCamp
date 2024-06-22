from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException, ElementClickInterceptedException

import os
from dotenv import load_dotenv

load_dotenv()

FACEBOOK_USER = os.getenv("mail")
FACEBOOK_PASS = os.getenv("FACEBOOK_PASS")

chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options)
driver.get("https://tinder.com")

tinder_page = driver.current_window_handle

sleep(2)
login_button = driver.find_element(By.XPATH,"//a[contains(., 'Log in')]")
login_button.click()
sleep(1)
facebook_button = driver.find_element(By.XPATH,"//button[contains(., 'Log in with Facebook')]")
facebook_button.click()



for page in driver.window_handles:
    if page != tinder_page:
        driver.switch_to.window(page)



sleep(1)
email_input = driver.find_element(By.ID, value="email")
email_input.send_keys(FACEBOOK_USER)
password_input = driver.find_element(By.ID, value="pass")
password_input.send_keys(FACEBOOK_PASS)
password_input.send_keys(Keys.ENTER)

sleep(5)
driver.switch_to.window(tinder_page)

allow_button = driver.find_element(By.XPATH,"//button[contains(., 'Allow')]")
allow_button.click()

notification_button = driver.find_element(By.XPATH, "//button[contains(., 'I’ll miss out')]")
notification_button.click()


for like in range(100):
    sleep(1)

    try:
        like_button = driver.find_element(By.XPATH, "//button[contains(., 'Like')]")
        like_button.click()
    except ElementClickInterceptedException:
        try:
            match_popup = driver.find_element(By.CSS_SELECTOR, value=".itsAMatch a")
            match_popup.click()

        #Catches the cases where the "Like" button has not yet loaded, so wait 2 seconds before retrying.
        except NoSuchElementException:
            sleep(2)


# //*[@id="u1584650407"]/div/div[1]/div/main/div[1]/div/div/div/div/header/div/div[2]/div[2]/a
# /html/body/div[1]/div/div[1]/div/main/div[1]/div/div/div/div/header/div/div[2]/div[2]/a
