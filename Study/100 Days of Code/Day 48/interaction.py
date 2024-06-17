from selenium import webdriver
from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys


chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)

wiki_url = "https://en.wikipedia.org/wiki/Main_Page"
app_brewery = "http://secure-retreat-92358.herokuapp.com/"
driver = webdriver.Chrome(options=chrome_options)

driver.get(app_brewery)

# articles_wiki = driver.find_element(By.CSS_SELECTOR, value="#articlecount a")
# print(articles_wiki.text)

input_name = driver.find_element(By.NAME, value="fName")
input_last_name = driver.find_element(By.NAME, value="lName")
input_email = driver.find_element(By.NAME, value="email")
submit_button = driver.find_element(By.CSS_SELECTOR, value="form button")


input_name.send_keys("Israel")
input_last_name.send_keys("Gonzalez")
input_email.send_keys("igruizregistros@gmail.com")
submit_button.click()

driver.quit()
