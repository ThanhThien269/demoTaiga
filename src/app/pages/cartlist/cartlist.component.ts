import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { CartState } from '../../ngrx/states/cart.state';
import { Cart } from '../../models/product.model';
import * as CartActions from '../../ngrx/actions/cart.actions';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-cartlist',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cartlist.component.html',
  styleUrl: './cartlist.component.scss',
})
export class CartlistComponent implements OnInit {
  constructor(private store: Store<{ cart: CartState }>) {}
  cart: Cart = {
    id: '',
    itemList: [],
    total: 0,
  };
  quantityFormList: FormControl[] = [];
  cart$ = this.store.select('cart', 'cart');
  ngOnInit(): void {
    this.cart$.subscribe((cart) => {
      if (cart) {
        this.cart = {
          ...this.cart,
          itemList: cart.itemList,
          total: cart.total,
        };
        cart.itemList.forEach((product) => {
          this.quantityFormList.push(new FormControl(product.quality));
        });
      }
    });
    this.quantityFormList.forEach((form, index) => {
      form.valueChanges.subscribe((value) => {
        this.updateQuantity(index, value);
      });
    });
  }
  count(quality: number, price: number) {
    return Math.ceil(quality * price);
  }
  removeProduct(index: number) {
    this.store.dispatch(
      CartActions.removeItem({ id: this.cart.itemList[index].id })
    );
  }
  updateQuantity(index: number, quality: number) {
    this.store.dispatch(
      CartActions.updateProduct({
        product: {
          ...this.cart.itemList[index],
          quality: quality,
        },
      })
    );
  }
}
