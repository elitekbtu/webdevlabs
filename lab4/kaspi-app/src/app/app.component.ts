import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  template: `<app-products></app-products>`, 
  imports: [ProductsComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaspi-products';
}