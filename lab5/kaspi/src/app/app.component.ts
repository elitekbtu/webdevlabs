import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    { name: 'Электроника', id: 1 },
    { name: 'Одежда', id: 2 },
    { name: 'Книги', id: 3 },
    { name: 'Дом и сад', id: 4 }
  ];

  selectedCategoryId: number | null = 1;

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }
}