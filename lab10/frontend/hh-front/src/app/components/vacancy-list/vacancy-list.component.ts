import { Component, OnInit } from '@angular/core';
import { ApiService, Vacancy } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { VacancyCardComponent } from '../vacancy-card/vacancy-card.component';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, RouterLink, VacancyCardComponent],
  template: `
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-6 text-indigo-800">Vacancies</h1>
      <a routerLink="/vacancies/new" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Add New Vacancy
      </a>
    </div>

    <div *ngIf="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
    </div>

    <div *ngIf="!loading && vacancies.length === 0" class="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
      <p class="text-yellow-700">No vacancies found. Add your first vacancy!</p>
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
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadVacancies();
  }

  loadVacancies(): void {
    this.apiService.getVacancies().subscribe({
      next: (data) => {
        this.vacancies = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading vacancies:', error);
        this.loading = false;
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