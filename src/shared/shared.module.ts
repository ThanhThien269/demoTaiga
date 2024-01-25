import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterOutlet, NavbarComponent, ReactiveFormsModule],
  exports: [CommonModule, RouterOutlet, NavbarComponent, ReactiveFormsModule],
})
export class SharedModule {}
