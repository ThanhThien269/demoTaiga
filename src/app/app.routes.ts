import { Routes } from '@angular/router';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CartlistComponent } from './pages/cartlist/cartlist.component';

export const routes: Routes = [
  {
    path: 'productlist',
    component: ProductlistComponent,
  },

  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'cart',
    component: CartlistComponent,
  },
  {
    path: '**',
    redirectTo: '/productlist',
    pathMatch: 'full',
  },
];
