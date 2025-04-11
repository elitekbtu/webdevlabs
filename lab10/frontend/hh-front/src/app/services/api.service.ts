import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies/`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/companies/${id}/`);
  }

  createCompany(company: Omit<Company, 'id'>): Observable<Company> {
    return this.http.post<Company>(`${this.baseUrl}/companies/`, company);
  }

  updateCompany(id: number, company: Partial<Company>): Observable<Company> {
    return this.http.put<Company>(`${this.baseUrl}/companies/${id}/`, company);
  }

  deleteCompany(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/companies/${id}/`);
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/companies/${id}/vacancies/`);
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/vacancies/`);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.baseUrl}/vacancies/${id}/`);
  }

  createVacancy(vacancy: Omit<Vacancy, 'id'>): Observable<Vacancy> {
    return this.http.post<Vacancy>(`${this.baseUrl}/vacancies/`, vacancy);
  }

  updateVacancy(id: number, vacancy: Partial<Vacancy>): Observable<Vacancy> {
    return this.http.put<Vacancy>(`${this.baseUrl}/vacancies/${id}/`, vacancy);
  }

  deleteVacancy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/vacancies/${id}/`);
  }

  getTopTenVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/vacancies/top_ten/`);
  }
}