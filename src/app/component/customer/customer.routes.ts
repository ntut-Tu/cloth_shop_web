import { Routes } from '@angular/router';
import { CustomerPageComponent } from './page/customer.page.component';
import {ProductsComponent} from "./products/products.component";
import {OrdersComponent} from "./orders/orders.component";


export const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerPageComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: OrdersComponent },
    ]
  }
];
