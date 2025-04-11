import { Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';
import { VacancyDetailComponent } from './components/vacancy-detail/vacancy-detail.component';
import { VacancyFormComponent } from './components/vacancy-form/vacancy-form.component';
import { TopVacanciesComponent } from './components/top-vacancies/top-vacancies.component';
import { CompanyVacanciesComponent } from './components/company-vacancies/company-vacancies.component';

export const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/new', component: CompanyFormComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
  { path: 'companies/:id/edit', component: CompanyFormComponent },
  { path: 'companies/:id/vacancies', component: CompanyVacanciesComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: 'vacancies/new', component: VacancyFormComponent },
  { path: 'vacancies/:id', component: VacancyDetailComponent },
  { path: 'vacancies/:id/edit', component: VacancyFormComponent },
  { path: 'top-vacancies', component: TopVacanciesComponent },
];