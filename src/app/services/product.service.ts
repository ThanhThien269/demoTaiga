import { Injectable } from '@angular/core';
import {
  AddPrefixToKeys,
  DocumentReference,
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Item } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  listItem: Item[] = [];
  cartList: Item[] = [];
  constructor(private fbProducts: Firestore) {
    //get list item product from firebase firestore
    onSnapshot(collection(this.fbProducts, 'products'), (snapshot) => {
      this.listItem = [];
      snapshot.forEach((doc) => {
        this.listItem.push(doc.data() as Item);
        console.log(doc.id, '=>', doc.data());
        console.log(this.listItem);
      });
    });
  }
  idFirebase: string = '';
  //add item product to firebase firestore
  // add(item: Item) {
  //   addDoc(collection(this.fbProducts, 'products'), item);
  //   console.log('add product success');
  // }
  async add(item: Item) {
    await setDoc(doc(this.fbProducts, 'products', item.id.toString()), item);
  }
  // async add(item: Item) {
  //   try {
  //     const docRef = await addDoc(
  //       collection(this.fbProducts, 'products'),
  //       item
  //     );
  //     console.log('Document written with ID: ', docRef.id);
  //   } catch (e) {
  //     console.error('Error adding document: ', e);
  //   }
  // }

  async delete(item: Item) {
    await deleteDoc(doc(this.fbProducts, 'products', item.id.toString()));
  }

  async addCartItem(item: Item) {
    await setDoc(doc(this.fbProducts, 'cartList', item.id.toString()), item);
  }
  async deleteCartItem(item: Item) {
    await deleteDoc(doc(this.fbProducts, 'products', item.id.toString()));
  }
  async getCartList() {
    onSnapshot(collection(this.fbProducts, 'cartList'), (snapshot) => {
      this.cartList = [];
      snapshot.forEach((doc) => {
        this.cartList.push(doc.data() as Item);
        console.log(doc.id, '=>', doc.data());
        console.log(this.cartList);
      });
    });
  }
}
