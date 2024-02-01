import { Pokemon } from './../../models/poke.model';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor() {}
  @Input('Pokemon') Pokemon!: Pokemon;
}
