from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
# from bs4 import BeautifulSoup
# import requests
path = 'C:/Users/bjones/Downloads/chromedriver-win64/chromedriver-win64/chromedriver.exe'
driver = webdriver.Chrome(path)
driver.get("https://slate.ua.edu/portal/programs")
consent_button = driver.find_element(By.ID, '_pc_1')
consent_button.send_keys(Keys.ENTER)
subtabs = driver.find_element(By.CLASS_NAME, 'subtabs')
program_directory = driver.find_element(By.LINK_TEXT, 'Program Directory')
program_directory.send_keys(Keys.ENTER)
try:
    table = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, 'table'))) #driver.find_element(By.XPATH, '//*[@class=\'table sortable searchable sortable_completed searchable_completed\']')
except:
    driver.quit()
all_links = table.find_elements(By.TAG_NAME, 'a')
degrees = []
for link in all_links:
    degrees.append(link.text)
# print(f'\nDegrees = {degrees}\n')
degrees.sort()
file = open('degrees.txt','w')
for degree in degrees:
    file.write(degree + '\n')
driver.close()


# _pc_1


# url = 'https://slate.ua.edu/portal/programs?tab=program_details'
# html = requests.get(url)

# content = html.content
# bs = BeautifulSoup(content, 'html.parser')
# results = bs.find(id='portal_row_container')
# all_grad_programs = results.find_all('h2')
# print(results.prettify())
# # all = all_grad_programs.find_all('td')
# for a in all_grad_programs:
#     print(a)