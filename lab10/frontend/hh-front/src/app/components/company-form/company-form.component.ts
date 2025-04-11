import { Component, OnInit } from '@angular/core';
import { ApiService, Company } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h1 class="text-2xl font-bold mb-6 text-indigo-800">
        {{ isEditMode ? 'Edit Company' : 'Create New Company' }}
      </h1>
      
      <form [formGroup]="companyForm" (ngSubmit)="onSubmit()" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" formControlName="name" 
                 class="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <div *ngIf="companyForm.get('name')?.invalid && companyForm.get('name')?.touched" 
               class="text-red-500 text-sm mt-3">
            Name is required
          </div>
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" formControlName="description" rows="3"
                    class="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
        </div>

        <div>
          <label for="city" class="block text-sm font-medium text-gray-700">City</label>
          <input type="text" id="city" formControlName="city"
                 class="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div>
          <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="address" formControlName="address"
                 class="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div class="flex justify-end space-x-3">
          <button type="button" routerLink="/companies" 
                  class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" [disabled]="companyForm.invalid" 
                  class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-300">
            {{ isEditMode ? 'Update' : 'Create' }}
          </button>
        </div>
      </form>
    </div>
  `,
  styles: []
})
export class CompanyFormComponent implements OnInit {
  isEditMode = false;
  companyId: number | null = null;
  companyForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      city: [''],
      address: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isEditMode = true;
      this.companyId = Number(id);
      this.loadCompany(this.companyId);
    }
  }

  loadCompany(id: number): void {
    this.apiService.getCompany(id).subscribe({
      next: (company) => {
        this.companyForm.patchValue(company);
      },
      error: () => {
        this.router.navigate(['/companies']);
      }
    });
  }

  onSubmit(): void {
    if (this.companyForm.invalid) return;

    const companyData = this.companyForm.value as Omit<Company, 'id'>;

    if (this.isEditMode && this.companyId) {
      this.apiService.updateCompany(this.companyId, companyData).subscribe({
        next: () => {
          this.router.navigate(['/companies', this.companyId]);
        }
      });
    } else {
      this.apiService.createCompany(companyData).subscribe({
        next: (company) => {
          this.router.navigate(['/companies', company.id]);
        }
      });
    }
  }
}
