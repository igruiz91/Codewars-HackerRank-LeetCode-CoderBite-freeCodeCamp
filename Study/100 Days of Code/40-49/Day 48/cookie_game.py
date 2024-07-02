from selenium import webdriver
from selenium.webdriver.common.by import By
import threading
import time


chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options)

cookie_game_url = "https://orteil.dashnet.org/experiments/cookie/"
driver.get(cookie_game_url)

cookie = driver.find_element(By.ID, value="cookie")
money = driver.find_element(By.ID, value="money")
store = driver.find_element(By.ID, value="store")



def get_shop_items():
    return store.find_elements(By.TAG_NAME, value="div")

def buy_power_up():
    shop = get_shop_items()
    for i in range(len(shop) - 1, -1, -1):
        if shop[i].get_attribute(name="class") != "grayed":
            shop[i].click()
            break
def run_game(click_interval, buy_interval):
    last_buy_time= time.time()

    while True:
        cookie.click()
        current_time = time.time()
        if current_time- last_buy_time>=buy_interval:
            buy_power_up()
            last_buy_time=current_time
        time.sleep(click_interval)

run_game(0.1, 5)
