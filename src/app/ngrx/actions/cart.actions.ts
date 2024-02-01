import { createAction, props } from '@ngrx/store';
import { Item } from '../../models/product.model';

export const addItem = createAction(
  '[Cart Component] Add Item',
  props<{ product: Item }>()
);
export const removeItem = createAction(
  '[Cart Component] Remove Item',
  props<{ id: string }>()
);
export const updateProduct = createAction(
  '[Cart Component] Update Item',
  props<{ product: Item }>()
);
export const clearCart = createAction('[Cart Component] Clear Cart');
