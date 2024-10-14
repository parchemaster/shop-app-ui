import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Sample data for categories and products
  categories = [
    { name: 'Electronics', imageUrl: 'assets/images/logo.jpg' },
    { name: 'Clothing', imageUrl: 'assets/images/logo.jpg' },
    { name: 'Home Appliances', imageUrl: 'assets/images/logo.jpg' }
  ];

  featuredProducts = [
    { name: 'Laptop', price: 1200, imageUrl: 'assets/images/logo.jpg' },
    { name: 'T-Shirt', price: 25, imageUrl: 'assets/images/logo.jpg' },
    { name: 'Coffee Maker', price: 75, imageUrl: 'assets/images/logo.jpg' }
  ];
}