# must pip3 install selenium
# must download chrome and chromedriver from selenium website: https://chromedriver.chromium.org/downloads

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

path = 'C:/Users/bjones/Downloads/chromedriver-win64 (1)/chromedriver-win64/chromedriver.exe' # change to path of chromedriver; Must be updated when chrome has updated
driver = webdriver.Chrome(path)
driver.get("https://slate.ua.edu/portal/programs")
consent_button = driver.find_element(By.ID, '_pc_1')
consent_button.send_keys(Keys.ENTER)
subtabs = driver.find_element(By.CLASS_NAME, 'subtabs')
program_directory = driver.find_element(By.LINK_TEXT, 'Program Directory')
program_directory.send_keys(Keys.ENTER)
try:
    table = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, 'table')))
    all_links = table.find_elements(By.TAG_NAME, 'a')
    all_tds = table.find_elements(By.TAG_NAME, 'td')
    possible_colleges = ['Arts and Sciences',
        'Business',
        'Communication and Information Sciences',
        'Community Health Sciences',
        'Education',
        'Engineering',
        'Graduate Interdisciplinary Studies',
        'Human Environmental Sciences',
        'Nursing',
        'Social Work'
    ]
    degrees = []
    colleges = []
    for link in all_links:
        degrees.append(link.text)
    for td in all_tds:
        if td.text in possible_colleges:
            colleges.append(td.text)
    degree_college_tuples = []
    for i in range(len(degrees)):
        degree_college_tuples.append((degrees[i],colleges[i]))
    degree_college_tuples.sort(key=lambda x: x[0])
    file = open('degrees.txt','w')
    for pair in degree_college_tuples:
        file.write('Degree: ' + pair[0] + ' label: ' + pair[0] + ' College: ' + pair[1] + '\n')
        # print(degree)
except:
    file = open('error.txt','w')
    file.write('Unable to open webpage and parse tables')
finally:
    driver.close()