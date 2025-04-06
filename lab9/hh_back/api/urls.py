from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyList.as_view()),
    path('companies/<int:pk>/', views.CompanyDetail.as_view()),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesList.as_view()),
    path('vacancies/', views.VacancyList.as_view()),
    path('vacancies/<int:pk>/', views.VacancyDetail.as_view()), 
    path('vacancies/top_ten/', views.TopTenVacanciesList.as_view()),
]