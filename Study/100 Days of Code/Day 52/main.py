import os
import time
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains

from dotenv import load_dotenv

load_dotenv()

user = os.getenv("mail")
password = os.getenv("INSTAGRAM_PASSWORD")
TARGET_ACCOUNT = "_rosales_fit"




class InstaFollower:
    def __init__(self):
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_experimental_option('detach', True)

        self.driver = webdriver.Chrome(options=chrome_options)

    def login(self):
        self.driver.get("https://www.instagram.com/")
        user_input = WebDriverWait(self.driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'input[name="username"]')))
        user_input.send_keys(user)
        pass_input = self.driver.find_element(By.CSS_SELECTOR, 'input[name="password"]')
        pass_input.send_keys(password)
        pass_input.send_keys(Keys.ENTER)

        not_now_button = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[text()='Not now']")))
        not_now_button.click()

        not_now_button = WebDriverWait(self.driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//button[text()='Not Now']")))
        not_now_button.click()

    def find_followers(self):
        self.driver.get("https://www.instagram.com/_rosales_fit/following/")
        following = WebDriverWait(self.driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//a[contains(text(), 'following')]")))
        following.click()

        dialog = self.driver.find_element(
                    By.XPATH,
                    "/html/body/div[7]/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div/div[4]/div[1]/div",
                )

        follow_buttons = dialog.find_elements(By.XPATH, "//button[contains(text(), 'follow')]")
        print(follow_buttons)

    def follow():
        pass

    def scroll_to_bottom(self, dialog):
        actions = ActionChains(self.driver)
        actions.move_to_element(dialog).perform()  # Move to the dialog element

        last_height = self.driver.execute_script("return arguments[0].scrollHeight;", dialog)
        while True:
            actions.move_to_element(dialog).send_keys(Keys.PAGE_DOWN).perform()  # Scroll down
            time.sleep(2)
            new_height = self.driver.execute_script("return arguments[0].scrollHeight;", dialog)
            if new_height == last_height:
                break
            last_height = new_height



bot = InstaFollower()

bot.login()
bot.find_followers()
