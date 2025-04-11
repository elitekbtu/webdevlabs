import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vacancy } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vacancy-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div class="p-6">
        <h2 class="text-xl font-semibold text-indigo-700 mb-2">{{ vacancy.name }}</h2>
        <p class="text-gray-600 mb-4">{{ vacancy.description }}</p>
        <div class="flex items-center text-green-600 font-bold mb-4">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
          <span>$ {{ vacancy.salary }}</span>
        </div>
        <div class="flex space-x-2">
          <a [routerLink]="['/vacancies', vacancy.id]" 
             class="bg-indigo-100 text-indigo-700 px-3 py-1 rounded hover:bg-indigo-200">
            View
          </a>
          <a [routerLink]="['/vacancies', vacancy.id, 'edit']" 
             class="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">
            Edit
          </a>
          <button (click)="onDelete()" 
                  class="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200">
            Delete
          </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class VacancyCardComponent {
  @Input() vacancy!: Vacancy;
  @Output() delete = new EventEmitter<number>();

  onDelete(): void {
    this.delete.emit(this.vacancy.id);
  }
}
