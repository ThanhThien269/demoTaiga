import { createReducer, on } from '@ngrx/store';
import { Item } from '../../models/product.model';
import * as ItemActions from '../actions/product.actions';
import { ItemState } from '../states/product.state';

export const initialState: ItemState = {
  items: [],
};

export const itemReducer = createReducer(
  initialState,

  //load items from firebase firestore
  on(ItemActions.loadItems, (state) => ({
    ...state,
  }))
);
