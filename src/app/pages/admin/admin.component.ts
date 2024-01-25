import {
  ChangeDetectorRef,
  Component,
  ElementRef,
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
  imports: [SharedModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  constructor(public productService: ProductService) {}
  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog() {
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }
  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }

  form = new FormGroup({
    stock: new FormControl(0),
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    quality: new FormControl(0),
    image: new FormControl(''),
  });

  submit() {
    let newForm: Item = {
      id: Math.floor(Math.random() * 1000).toString(),
      stock: this.form.value.stock || 0,
      name: this.form.value.name || '',
      description: this.form.value.description || '',
      price: this.form.value.price || 0,
      image: this.form.value.image || '',
      quality: this.form.value.quality || 0,
    };
    this.addProduct(newForm);
    console.log(newForm);
  }

  addProduct(item: Item) {
    this.productService.add(item);
  }
  deleteProduct(item: Item) {
    this.productService.delete(item);
    console.log(item);
  }
}
