import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';

import { CustomerPageComponent } from './page/customer.page.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    CustomerPageComponent,
    ProductsComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)
  ]
})
export class CustomerModule { }
