import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cartlist',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cartlist.component.html',
  styleUrl: './cartlist.component.scss',
})
export class CartlistComponent {
  constructor(public productService: ProductService) {}
}
