from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from .models import Company, Vacancy
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(
            name=data['name'],
            description=data['description'],
            city=data['city'],
            address=data['address']
        )
        return JsonResponse(company.to_json())

@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data['name']
        company.description = data['description']
        company.city = data['city']
        company.address = data['address']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'Company deleted successfully'}, status=204)

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)
    
    vacancies = company.vacancies.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    city = serializers.CharField(max_length=255)
    address = serializers.CharField()

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance

class VacancyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']

@method_decorator(csrf_exempt, name='dispatch')
class VacancyList(View):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)

    def post(self, request):
        data = json.loads(request.body)
        vacancy = Vacancy.objects.create(
            name=data['name'],
            description=data['description'],
            salary=data['salary'],
            company_id=data['company']
        )
        return JsonResponse(vacancy.to_json())

@method_decorator(csrf_exempt, name='dispatch')
class VacancyDetail(View):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=404)

    def get(self, request, id):
        vacancy = self.get_object(id)
        if isinstance(vacancy, JsonResponse):
            return vacancy
        return JsonResponse(vacancy.to_json())

    def put(self, request, id):
        vacancy = self.get_object(id)
        if isinstance(vacancy, JsonResponse):
            return vacancy
        
        data = json.loads(request.body)
        vacancy.name = data['name']
        vacancy.description = data['description']
        vacancy.salary = data['salary']
        vacancy.company_id = data['company']
        vacancy.save()
        return JsonResponse(vacancy.to_json())

    def delete(self, request, id):
        vacancy = self.get_object(id)
        if isinstance(vacancy, JsonResponse):
            return vacancy
        vacancy.delete()
        return JsonResponse({'message': 'Vacancy deleted successfully'}, status=204)

class TopTenVacancies(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancyModelSerializer(vacancies, many=True)
        return Response(serializer.data)