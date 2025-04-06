import requests

url = "http://localhost:8000/api/vacancies/"

vacancy_data = {
    "name": "Academic",
    "description": "Math legend",
    "salary": 500000.00,
    "company": 3 
}

#response = requests.post(url, json=vacancy_data)
# print(response.json())
print(requests.get(url).json())