export interface Item {
  name: string;
  id: string;
  description: string;
  price: number;
  quality: number;
  image: string;
  stock: number;
}
export interface Cart {
  itemList: Item[];
  total: number;
  id: string;
}
