from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
import time
import os
from dotenv import load_dotenv

load_dotenv()
linkedin_email = os.getenv("LINKEDIN_EMAIL")
linkedin_password = os.getenv("LINKEDIN_PASS")
phone = os.getenv("PHONE")
linkdin_url = "https://www.linkedin.com/jobs/search/?currentJobId=3940578475&f_AL=true&f_I=4&f_JT=F&f_WT=2&geoId=103644278&keywords=frontend%20developer&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true&sortBy=R"

chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options)

driver.get(linkdin_url )

def clear_cookies_msg():
    try:
        reject_button = driver.find_element(By.CSS_SELECTOR, value="button[action-type='DENY']")
        reject_button.click()
    except NoSuchElementException:
        print("cookie element not found... continuing script")

def abort_application():
    close_button = driver.find_element(by=By.CLASS_NAME, value="artdeco-modal__dismiss")
    close_button.click()
    time.sleep(1)
    discard_button = driver.find_elements(by=By.CLASS_NAME, value="artdeco-modal__confirm-dialog-btn")[1]
    discard_button.click()
    print("Complex application... skipped.")

def login_linkedin():
    sign_in_button = driver.find_element(by=By.LINK_TEXT, value="Sign in")
    sign_in_button.click()

    input_user = driver.find_element(By.ID, value="username")
    input_password = driver.find_element(By.ID, value="password")
    input_user.send_keys(linkedin_email)
    input_password.send_keys(linkedin_password)
    input_password.send_keys(Keys.ENTER)


clear_cookies_msg()
login_linkedin()

input("Press Enter when you have solved the Captcha...")


time.sleep(2)

all_listings = driver.find_elements(by=By.CSS_SELECTOR, value=".job-card-container--clickable")


for job in all_listings:
    job.click()
    time.sleep(2)
    apply_button = driver.find_element(By.CLASS_NAME, value="jobs-apply-button--top-card")
    try:
        apply_button = driver.find_element(by=By.CSS_SELECTOR, value=".jobs-s-apply button")
        apply_button.click()
        time.sleep(1)
        phone = driver.find_element(by=By.CSS_SELECTOR, value="input[id*=phoneNumber]")
        if phone.text == "":
            phone.send_keys(phone)

        submit_button = driver.find_element(by=By.CSS_SELECTOR, value="footer button")
        if submit_button.get_attribute("data-control-name") == "continue_unify":
            abort_application()
            continue
        else:
            submit_button.click()


        time.sleep(1)
        # Click Close Button
        close_button = driver.find_element(by=By.CLASS_NAME, value="artdeco-modal__dismiss")
        close_button.click()

    except NoSuchElementException:
        abort_application()
        continue

driver.quit()
