import { Component, OnInit } from '@angular/core';
import { ApiService, Vacancy, Company } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vacancy-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h1 class="text-2xl font-bold mb-6 text-indigo-800">
        {{ isEditMode ? 'Edit Vacancy' : 'Create New Vacancy' }}
      </h1>

      <form [formGroup]="vacancyForm" (ngSubmit)="onSubmit()" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Position Name</label>
          <input type="text" id="name" formControlName="name"
                 class="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <div *ngIf="vacancyForm.get('name')?.invalid && vacancyForm.get('name')?.touched"
               class="text-red-500 text-sm mt-3">
            Position name is required
          </div>
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" formControlName="description" rows="3"
                    class="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
        </div>

        <div>
          <label for="salary" class="block text-sm font-medium text-gray-700">Salary</label>
          <input type="number" id="salary" formControlName="salary" min="0"
                 class="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <div *ngIf="vacancyForm.get('salary')?.invalid && vacancyForm.get('salary')?.touched"
               class="text-red-500 text-sm mt-3">
            Salary must be a positive number
          </div>
        </div>

        <div>
          <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
          <select id="company" formControlName="company"
                  class="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option value="">Select a company</option>
            <option *ngFor="let company of companies" [value]="company.id">{{ company.name }}</option>
          </select>
          <div *ngIf="vacancyForm.get('company')?.invalid && vacancyForm.get('company')?.touched"
               class="text-red-500 text-sm mt-3">
            Company is required
          </div>
        </div>

        <div class="flex justify-end space-x-3">
          <button type="button" routerLink="/vacancies"
                  class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" [disabled]="vacancyForm.invalid"
                  class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-300">
            {{ isEditMode ? 'Update' : 'Create' }}
          </button>
        </div>
      </form>
    </div>
  `,
  styles: []
})
export class VacancyFormComponent implements OnInit {
  isEditMode = false;
  vacancyId: number | null = null;
  companies: Company[] = [];

  vacancyForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vacancyForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      salary: [0, [Validators.required, Validators.min(0)]],
      company: ['', Validators.required]
    });

    this.loadCompanies();

    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isEditMode = true;
      this.vacancyId = Number(id);
      this.loadVacancy(this.vacancyId);
    }
  }

  loadCompanies(): void {
    this.apiService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
      }
    });
  }

  loadVacancy(id: number): void {
    this.apiService.getVacancy(id).subscribe({
      next: (vacancy) => {
        this.vacancyForm.patchValue({
          ...vacancy,
          company: vacancy.company.toString()
        });
      },
      error: () => {
        this.router.navigate(['/vacancies']);
      }
    });
  }

  onSubmit(): void {
    if (this.vacancyForm.invalid) return;

    const rawValue = this.vacancyForm.value;
    const vacancyData: Omit<Vacancy, 'id'> = {
      ...rawValue,
      company: Number(rawValue.company)
    };

    if (this.isEditMode && this.vacancyId) {
      this.apiService.updateVacancy(this.vacancyId, vacancyData).subscribe({
        next: () => {
          this.router.navigate(['/vacancies', this.vacancyId]);
        }
      });
    } else {
      this.apiService.createVacancy(vacancyData).subscribe({
        next: (vacancy) => {
          this.router.navigate(['/vacancies', vacancy.id]);
        }
      });
    }
  }
}
