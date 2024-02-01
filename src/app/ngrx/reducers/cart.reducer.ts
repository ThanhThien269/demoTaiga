import { createReducer, on } from '@ngrx/store';
import { CartState } from '../states/cart.state';
import * as CartActions from '../actions/cart.actions';

export const initialState: CartState = {
  cart: {
    itemList: [],
    total: 0,
    id: '',
  },
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addItem, (state, action) => {
    // console.log(action.product);
    //make product list unique
    let itemList = [...state.cart.itemList];
    let product = action.product;
    let isProductExist = false;
    itemList.forEach((p) => {
      if (p.id === product.id) {
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      itemList.push({ ...product, quality: 1 });
    } else {
      itemList = itemList.map((p) => {
        if (p.id === product.id) {
          p = {
            ...p,
            quality: p.quality + 1,
          };
          return p;
        }
        return p;
      });
    }
    return {
      ...state,
      cart: {
        ...state.cart,
        itemList: itemList,
        total: itemList.reduce((total, product) => {
          return total + product.price * product.quality;
        }, 0),
      },
    };
  }),
  on(CartActions.updateProduct, (state, action) => {
    let itemList = [...state.cart.itemList];
    let product = action.product;
    console.log(product);
    itemList = itemList.map((p) => {
      if (p.id === product.id) {
        console.log('match');
        p = {
          ...p,
          quality: product.quality,
        };
        return p;
      }
      return p;
    });
    return {
      ...state,
      cart: {
        ...state.cart,
        itemList: itemList,
        total: itemList.reduce((total, product) => {
          return total + product.price * product.quality;
        }, 0),
      },
    };
  }),
  on(CartActions.removeItem, (state, action) => {
    console.log(action.id);
    let itemList = [...state.cart.itemList];
    itemList = itemList.filter((product) => {
      return product.id !== action.id;
    });
    return {
      ...state,
      cart: {
        ...state.cart,
        itemList: itemList,
        total: itemList.reduce((total, product) => {
          return total + product.price * product.quality;
        }, 0),
      },
    };
  }),
  on(CartActions.clearCart, (state) => {
    return {
      ...state,
      cart: {
        ...state.cart,
        itemList: [],
        total: 0,
      },
    };
  })
);
