import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';

import { CustomerPageComponent } from './page/customer.page.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import {AppModule} from "../../app.module";
import {ProductListComponent} from "../shared/product-list/product-list.component";
import {SharedModule} from "../shared/shared.module";
import { CustomerViewDetailComponent } from './customer-view-detail/customer-view-detail.component';


@NgModule({
  declarations: [
    CustomerPageComponent,
    ProductsComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    SharedModule,
  ]
})
export class CustomerModule { }
