import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router, private productService: ProductService) {}
  goToProductList() {
    this.router.navigate(['/productlist']);
  }
  goToAdmin() {
    this.router.navigate(['/admin']);
  }
  goToCart() {
    this.productService.getCartList();
    this.router.navigate(['/cart']);
  }
  goToDetail() {
    this.router.navigate(['/detail']);
  }
}
