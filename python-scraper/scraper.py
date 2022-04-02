from urllib.request import urlopen 
from bs4 import BeautifulSoup


url_to_scrape = ["https://www.budgetyourtrip.com/austria"
, "https://www.budgetyourtrip.com/belgium "
# , "bulgaria"
, "https://www.budgetyourtrip.com/croatia "
, "https://www.budgetyourtrip.com/cyprus "
, "https://www.budgetyourtrip.com/denmark "
, "https://www.budgetyourtrip.com/estonia "
, "https://www.budgetyourtrip.com/finland "

#   , "https://www.budgetyourtrip.com/czech-republic "
, "https://www.budgetyourtrip.com/france "
, "https://www.budgetyourtrip.com/germany "
, "https://www.budgetyourtrip.com/greece "
, "https://www.budgetyourtrip.com/hungary "
, "https://www.budgetyourtrip.com/ireland "
, "https://www.budgetyourtrip.com/italy "
, "https://www.budgetyourtrip.com/latvia "
, "https://www.budgetyourtrip.com/lithuania "
, "https://www.budgetyourtrip.com/luxembourg "
, "https://www.budgetyourtrip.com/netherlands "
, "https://www.budgetyourtrip.com/norway "
# , "https://www.budgetyourtrip.com/poland "
, "https://www.budgetyourtrip.com/portugal "
, "https://www.budgetyourtrip.com/romania "
, "https://www.budgetyourtrip.com/slovakia "
, "https://www.budgetyourtrip.com/slovenia "
, "https://www.budgetyourtrip.com/switzerland "
, "https://www.budgetyourtrip.com/spain "
, "https://www.budgetyourtrip.com/sweden "
, "https://www.budgetyourtrip.com/united-kingdom "
, "https://www.budgetyourtrip.com/turkey "
, "https://www.budgetyourtrip.com/canada "
# , "https://www.budgetyourtrip.com/mexico "
, "https://www.budgetyourtrip.com/argentina "
, "https://www.budgetyourtrip.com/bolivia "
, "https://www.budgetyourtrip.com/brazil "
, "https://www.budgetyourtrip.com/chile "
, "https://www.budgetyourtrip.com/colombia "
, "https://www.budgetyourtrip.com/ecuador "
, "https://www.budgetyourtrip.com/peru "
, "https://www.budgetyourtrip.com/uruguay "
, "https://www.budgetyourtrip.com/venezuela "
, "https://www.budgetyourtrip.com/australia "
, "https://www.budgetyourtrip.com/south-africa "
, "https://www.budgetyourtrip.com/fiji "
  ]

counter = 0

for URL in url_to_scrape:
    request_page = urlopen(URL)
    page_html = request_page.read()
    request_page.close()

    html_soup = BeautifulSoup(page_html, 'html.parser')

    details_items = html_soup.find_all('li', class_="cost-tile")
    price_items = html_soup.find_all('div', class_="cost-tile-value")
    header_items = html_soup.find_all('div', class_="cost-tile-label")

    filename = str(counter) + '.doc'
    f = open(filename, 'w')

    f.write(URL + '\n')
    headers = 'Info, Title, Price \n'
    f.write(headers) #writes header to file
   
# #may need to find 
#     for headerValue in details_items:
#         header = headerValue.text 
#         # info = headerValue.find('span', class_="cost-tile-label-description").text 
#         # f.write(info)
#         f.write(header)

    for priceValue, headerValue in zip(price_items, details_items):
        title = priceValue.find('span', class_="symbol").text 
        price = priceValue.find('span', class_="curvalue").text 
        header = headerValue.text 
        
        # info = headerValue.find('span', class_="cost-tile-label-description").text 

        # f.write(str(headerValue) + ',' + title + ',' + price)
        f.write(headerValue.text + '/n')
        f.write(title + '/n')
        f.write(price)

    counter+=1

    f.close()