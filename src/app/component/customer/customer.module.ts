import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';

import { CustomerPageComponent } from './page/customer.page.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import {SharedModule} from "../shared/shared.module";
import { CartComponent } from './cart/cart.component';
import {CookieService} from "ngx-cookie-service";
import {CartService} from "../../service/mock/cart.service";


@NgModule({
  declarations: [
    CustomerPageComponent,
    ProductsComponent,
    OrdersComponent,
    CartComponent,
  ],
  providers:[
    CookieService,
    CartService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    SharedModule,
  ]
})
export class CustomerModule { }
