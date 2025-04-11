import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div class="p-6">
        <h2 class="text-xl font-semibold text-indigo-700 mb-2">{{ company.name }}</h2>
        <p class="text-gray-600 mb-4">{{ company.description }}</p>
        <div class="flex items-center text-gray-500 mb-4">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span>{{ company.city }}, {{ company.address }}</span>
        </div>
        <div class="flex space-x-2">
          <a [routerLink]="['/companies', company.id]" 
             class="bg-indigo-100 text-indigo-700 px-3 py-1 rounded hover:bg-indigo-200">
            View
          </a>
          <a [routerLink]="['/companies', company.id, 'edit']" 
             class="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">
            Edit
          </a>
          <button (click)="onDelete()" 
                  class="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200">
            Delete
          </button>
          <a [routerLink]="['/companies', company.id, 'vacancies']" 
             class="bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200">
            Vacancies
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CompanyCardComponent {
  @Input() company!: Company;
  @Output() delete = new EventEmitter<number>();

  onDelete(): void {
    this.delete.emit(this.company.id);
  }
}