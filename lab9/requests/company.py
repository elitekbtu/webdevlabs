import requests

url = "http://localhost:8000/api/companies/"

company_data = {
    "name": "Atyrau KazMunaiGaz",
    "description": "Petroleoum KZ gigant",
    "city": "Atyrau",
    "address": "Himzavod 13A"
}

# response = requests.post(url, json=company_data)
print(requests.get(url).json())
