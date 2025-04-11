import { Component, OnInit } from '@angular/core';
import { ApiService, Vacancy } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-vacancies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-6 text-indigo-800">Top 10 Highest Paying Vacancies</h1>
    </div>

    <div *ngIf="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
    </div>

    <div *ngIf="!loading && vacancies.length === 0" class="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
      <p class="text-yellow-700">No vacancies found.</p>
    </div>

    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr *ngFor="let vacancy of vacancies" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-indigo-600">{{ vacancy.name }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <a [routerLink]="['/companies', vacancy.company]" class="text-sm text-blue-600 hover:underline">
                View Company
              </a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                $ {{ vacancy.salary }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <a [routerLink]="['/vacancies', vacancy.id]" class="text-indigo-600 hover:text-indigo-900 mr-3">View</a>
              <a [routerLink]="['/vacancies', vacancy.id, 'edit']" class="text-blue-600 hover:text-blue-900">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: []
})
export class TopVacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTopVacancies();
  }

  loadTopVacancies(): void {
    this.apiService.getTopTenVacancies().subscribe({
      next: (data) => {
        this.vacancies = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading top vacancies:', error);
        this.loading = false;
      }
    });
  }
}
