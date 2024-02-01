import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ProductService } from '../../services/product.service';
import { Item } from '../../models/product.model';
import { Store } from '@ngrx/store';
import * as CartActions from '../../ngrx/actions/cart.actions';
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
})
export class ProductlistComponent {
  constructor(public productService: ProductService, private store: Store) {}
  addToCart(item: Item) {
    this.store.dispatch(CartActions.addItem({ product: item }));
  }
}
