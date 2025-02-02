import requests
from bs4 import BeautifulSoup

# get the website
page = requests.get("https://www.pizzamyheart.com/menu/")

# get all the text from the website
soup = BeautifulSoup(page.content, "lxml")
text = soup.text

# open the .md file and write all the text there
with open("data/data.md", 'w') as f:
    for t in text:
        f.write(t)

# close the file
f.close()