import pandas as pandas
import requests
from bs4 import BeautifulSoup

product_name = []

prices = []

Description = []

Reviews = []

for i in range(2, 12):

    url = "https://www.flipkart.com/search?q=mobiles+under+50000&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=" + str(i)

    r = requests.get(url)

    print(r)

    soup = BeautifulSoup(r.text, "lxml")

    box = soup.find("div", class_ = "DOjaWF gdgoEp")

    names = box.find_all("div", class_ = "KzDlHZ") 

    for i in names:

        name = i.text

        product_name.append(name)

    #print(product_name)

    prices = box.find_all("div", class_ = "Nx9bqj _4b5DiR")

    for i in prices:

        name = i.text

        prices.append(name)

    #print(prices)

    desc = box.find_all("ul", class_ = "J\+igdf")


    for i in desc:

        name = i.text

        Description.append(name)

    #print(Description)

    reviews = box.find_all("div", class_ = "XQDdHH")

    for i in reviews:

        name = i.text

        Reviews.append(name)

    df = pandas.DataFrame({"Product name" : "product_name", "Prices": "prices", "Description": "Description", "Revirews": "Reviews"})

    print(df)

    df.to_csv("C:/User/sonad/OneDrive/เอกสาร/data.csv")

    #print(Reviews)

    #print(soup)

    #np = soup.find("a",class_ = "_9QVEpD").get("href")

    #cnp = "https://www.flipkart.com"+np

    #print(cnp)

    #url = cnp

    #r = requests.get(url)

    #soup = BeautifulSoup(r.text, "lxml")
