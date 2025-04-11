import { Component, OnInit } from '@angular/core';
import { ApiService, Company, Vacancy } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div *ngIf="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
    </div>

    <div *ngIf="!loading && company" class="bg-white rounded-lg shadow-md p-6 mb-6">
      <div class="flex justify-between items-start mb-4">
        <h1 class="text-2xl font-bold text-indigo-800">{{ company.name }}</h1>
        <div class="flex space-x-2">
          <a [routerLink]="['/companies', company.id, 'edit']" 
             class="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">
            Edit
          </a>
          <button (click)="deleteCompany()" 
                  class="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200">
            Delete
          </button>
        </div>
      </div>
      <p class="text-gray-700 mb-4">{{ company.description }}</p>
      <div class="flex items-center text-gray-600 mb-2">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <span>{{ company.city }}, {{ company.address }}</span>
      </div>
      <a [routerLink]="['/companies', company.id, 'vacancies']" 
         class="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200">
        View Vacancies ({{ vacanciesCount }})
      </a>
    </div>

    <div *ngIf="!loading && !company" class="bg-red-100 border-l-4 border-red-500 p-4">
      <p class="text-red-700">Company not found.</p>
    </div>
  `,
  styles: []
})
export class CompanyDetailComponent implements OnInit {
  company: Company | null = null;
  vacanciesCount = 0;
  loading = true;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCompany(id);
    this.loadVacanciesCount(id);
  }

  loadCompany(id: number): void {
    this.apiService.getCompany(id).subscribe({
      next: (data) => {
        this.company = data;
        this.loading = false;
      },
      error: () => {
        this.company = null;
        this.loading = false;
      }
    });
  }

  loadVacanciesCount(id: number): void {
    this.apiService.getCompanyVacancies(id).subscribe({
      next: (data) => {
        this.vacanciesCount = data.length;
      }
    });
  }

  deleteCompany(): void {
    if (this.company && confirm('Are you sure you want to delete this company?')) {
      this.apiService.deleteCompany(this.company.id).subscribe({
        next: () => {
          this.router.navigate(['/companies']);
        },
        error: (error) => {
          console.error('Error deleting company:', error);
        }
      });
    }
  }
}