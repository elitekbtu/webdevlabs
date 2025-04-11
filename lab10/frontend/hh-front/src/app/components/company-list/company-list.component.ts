import { Component, OnInit } from '@angular/core';
import { ApiService, Company } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CompanyCardComponent } from '../company-card/company-card.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterLink, CompanyCardComponent],
  template: `
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-6 text-indigo-800">Companies</h1>
      <a routerLink="/companies/new" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Add New Company
      </a>
    </div>

    <div *ngIf="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
    <div *ngIf="!loading && companies.length === 0" class="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
      <p class="text-yellow-700">No companies found. Add your first company!</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <app-company-card 
        *ngFor="let company of companies" 
        [company]="company"
        (delete)="deleteCompany(company.id)">
      </app-company-card>
    </div>
  `,
  styles: []
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.apiService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading companies:', error);
        this.loading = false;
      }
    });
  }

  deleteCompany(id: number): void {
    if (confirm('Are you sure you want to delete this company?')) {
      this.apiService.deleteCompany(id).subscribe({
        next: () => {
          this.companies = this.companies.filter(company => company.id !== id);
        },
        error: (error) => {
          console.error('Error deleting company:', error);
        }
      });
    }
  }
}