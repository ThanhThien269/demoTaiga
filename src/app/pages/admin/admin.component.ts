import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
} from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ProductService } from '../../services/product.service';
import { Item } from '../../models/product.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  imports: [SharedModule],
})
export class AdminComponent {
  constructor(public productService: ProductService) {}
  readonly columns = [
    'numberOf',
    'id',
    'name',
    'description',
    'price',
    'image',
    'stock',
    'detail',
    'delete',
  ];

  testValue = new FormControl();

  filterList = ['Filter by id', 'Filter by username', 'Filter by role'];

  itemList: Item[] = [
    {
      id: '2j31klj3',
      name: 'test',
      description: 'test',
      price: 100,
      image:
        'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      stock: 1,
      quality: 1,
    },
    {
      id: 'uerjwoerj',
      name: 'test',
      description: 'test',
      price: 150,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuWP2wnP7Eu56sBi1JrTe44Jpcxez0TyQgzkV8HlHwA&s',
      stock: 1,
      quality: 1,
    },
    {
      id: 'daksldla3',
      name: 'test',
      description: 'test',
      price: 110,
      image:
        'https://tcorder.vn/wp-content/uploads/2015/11/giay-the-thao-nu-de-thap-3.jpg',
      stock: 1,
      quality: 1,
    },
    {
      id: 'dasdjaljiww4',
      name: 'test',
      description: 'test',
      price: 200,
      image:
        'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      stock: 1,
      quality: 1,
    },
    {
      id: 'uqkandhcj5',
      name: 'test',
      description: 'test',
      price: 130,
      image:
        'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      stock: 1,
      quality: 1,
    },
    {
      id: 'dalkjdlqjlwje6',
      name: 'test',
      description: 'test',
      price: 140,
      image:
        'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      stock: 1,
      quality: 1,
    },
    {
      id: 'dliqwuoruoq7',
      name: 'test',
      description: 'test',
      price: 111,
      image:
        'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-17.jpg',
      stock: 1,
      quality: 1,
    },
  ];
  remove(item: Item): void {
    this.itemList = this.itemList.filter((x) => x !== item);
  }
  openEditSidebar(open: boolean): void {
    this.openEdit = open;
  }
  selectedItem: Item | null = null;

  openEdit: boolean = false;
  userForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
    stock: new FormControl(),
  });
  open = false;

  showDialog(i: number): void {
    this.selectedItem = this.itemList[i];
    this.isCreate = false;
    this.open = true;
  }
  isCreate = false;

  showCreateDialog(): void {
    this.isCreate = true;
    this.open = true;
  }
  // this.userForm = new FormGroup({
  //   id: new FormControl(this.selectedItem?.id),
  //   name: new FormControl(this.selectedItem?.name),
  //   description: new FormControl(this.selectedItem?.description),
  //   price: new FormControl(this.selectedItem?.price),
  //   image: new FormControl(this.selectedItem?.image),
  //   stock: new FormControl(this.selectedItem?.stock),
  // });
}
