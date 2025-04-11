import { Component, OnInit } from '@angular/core';
import { ApiService, Vacancy, Company } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { VacancyCardComponent } from '../vacancy-card/vacancy-card.component';

@Component({
  selector: 'app-company-vacancies',
  standalone: true,
  imports: [CommonModule, RouterLink, VacancyCardComponent],
  template: `
    <div *ngIf="loadingCompany" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
    </div>

    <div *ngIf="!loadingCompany && company" class="mb-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-indigo-800">Vacancies at {{ company.name }}</h1>
        <a [routerLink]="['/vacancies/new']" [queryParams]="{company: company.id}" 
           class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Add New Vacancy
        </a>
      </div>
      <p class="text-gray-600 mt-2">{{ company.city }}, {{ company.address }}</p>
    </div>

    <div *ngIf="!loadingCompany && !company" class="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
      <p class="text-red-700">Company not found.</p>
    </div>

    <div *ngIf="loadingVacancies" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
    </div>

    <div *ngIf="!loadingVacancies && vacancies.length === 0" class="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
      <p class="text-yellow-700">No vacancies found for this company.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <app-vacancy-card 
        *ngFor="let vacancy of vacancies" 
        [vacancy]="vacancy"
        (delete)="deleteVacancy(vacancy.id)">
      </app-vacancy-card>
    </div>
  `,
  styles: []
})
export class CompanyVacanciesComponent implements OnInit {
  company: Company | null = null;
  vacancies: Vacancy[] = [];
  loadingCompany = true;
  loadingVacancies = true;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCompany(companyId);
    this.loadVacancies(companyId);
  }

  loadCompany(id: number): void {
    this.apiService.getCompany(id).subscribe({
      next: (data) => {
        this.company = data;
        this.loadingCompany = false;
      },
      error: () => {
        this.company = null;
        this.loadingCompany = false;
      }
    });
  }

  loadVacancies(companyId: number): void {
    this.apiService.getCompanyVacancies(companyId).subscribe({
      next: (data) => {
        this.vacancies = data;
        this.loadingVacancies = false;
      },
      error: () => {
        this.vacancies = [];
        this.loadingVacancies = false;
      }
    });
  }

  deleteVacancy(id: number): void {
    if (confirm('Are you sure you want to delete this vacancy?')) {
      this.apiService.deleteVacancy(id).subscribe({
        next: () => {
          this.vacancies = this.vacancies.filter(vacancy => vacancy.id !== id);
        },
        error: (error) => {
          console.error('Error deleting vacancy:', error);
        }
      });
    }
  }
}