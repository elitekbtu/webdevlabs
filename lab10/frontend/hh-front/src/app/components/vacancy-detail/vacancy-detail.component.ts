// src/app/components/vacancy-detail/vacancy-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService, Vacancy, Company } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vacancy-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div *ngIf="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
    </div>

    <div *ngIf="!loading && vacancy" class="bg-white rounded-lg shadow-md p-6 mb-6">
      <div class="flex justify-between items-start mb-4">
        <h1 class="text-2xl font-bold text-indigo-800">{{ vacancy.name }}</h1>
        <div class="flex space-x-2">
          <a [routerLink]="['/vacancies', vacancy.id, 'edit']" 
             class="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">
            Edit
          </a>
          <button (click)="deleteVacancy()" 
                  class="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200">
            Delete
          </button>
        </div>
      </div>
      
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-gray-800 mb-2">Description</h2>
        <p class="text-gray-700">{{ vacancy.description }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Salary</h2>
          <div class="flex items-center text-green-600 font-bold">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>$ {{ vacancy.salary }}</span>
          </div>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Company</h2>
          <div *ngIf="company" class="flex items-center">
            <svg class="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            <a [routerLink]="['/companies', company.id]" class="text-blue-600 hover:underline">
              {{ company.name }}
            </a>
          </div>
          <div *ngIf="!company" class="text-gray-500">Company not found</div>
        </div>
      </div>
    </div>

    <div *ngIf="!loading && !vacancy" class="bg-red-100 border-l-4 border-red-500 p-4">
      <p class="text-red-700">Vacancy not found.</p>
    </div>
  `,
  styles: []
})
export class VacancyDetailComponent implements OnInit {
  vacancy: Vacancy | null = null;
  company: Company | null = null;
  loading = true;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadVacancy(id);
  }

  loadVacancy(id: number): void {
    this.apiService.getVacancy(id).subscribe({
      next: (data) => {
        this.vacancy = data;
        this.loadCompany(data.company);
        this.loading = false;
      },
      error: () => {
        this.vacancy = null;
        this.loading = false;
      }
    });
  }

  loadCompany(id: number): void {
    this.apiService.getCompany(id).subscribe({
      next: (data) => {
        this.company = data;
      },
      error: () => {
        this.company = null;
      }
    });
  }

  deleteVacancy(): void {
    if (this.vacancy && confirm('Are you sure you want to delete this vacancy?')) {
      this.apiService.deleteVacancy(this.vacancy.id).subscribe({
        next: () => {
          this.router.navigate(['/vacancies']);
        },
        error: (error) => {
          console.error('Error deleting vacancy:', error);
        }
      });
    }
  }
}