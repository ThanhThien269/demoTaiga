import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ProductService } from '../../services/product.service';
import { Item } from '../../models/product.model';
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
})
export class ProductlistComponent {
  constructor(public productService: ProductService) {}
  addToCart(item: Item) {
    item.quality++;
    item.stock--;
    this.productService.addCartItem(item);
  }
}
