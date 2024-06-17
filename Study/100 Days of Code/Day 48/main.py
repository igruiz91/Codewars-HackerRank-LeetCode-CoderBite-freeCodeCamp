from selenium import webdriver
from selenium.webdriver.common.by import By
chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)


# amazon_url = "https://www.amazon.com/dp/B086H3YYDK?linkCode=ssc&tag=onamzjwhitney-20&creativeASIN=B086H3YYDK&asc_item-id=amzn1.ideas.2X6VEW142NG7L&ref_=aip_sf_list_spv_ofs_mixed_d_asin"
python_url = "https://www.python.org/"
driver = webdriver.Chrome(options=chrome_options)
driver.get(python_url)
#
# price_dollars = driver.find_element(By.CLASS_NAME, value="a-price-whole")
# price_cents = driver.find_element(By.CLASS_NAME, value="a-price-fraction")

event_lib = {}
upcoming_events=driver.find_element(By.XPATH, value='//*[@id="content"]/div/section/div[2]/div[2]/div/ul')

li_list = upcoming_events.find_elements(By.TAG_NAME, value = "li")

count = 0
for li in li_list:
    time = li.find_element(By.TAG_NAME, value="time")
    link = li.find_element(By.TAG_NAME, value="a")
    event_lib[count] = {"time": time.text, "name": link.text}
    count+=1
print(event_lib)
# print(f"price is {price_dollars.text}.{price_cents.text}")

driver.quit()
