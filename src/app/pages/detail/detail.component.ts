import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {}
