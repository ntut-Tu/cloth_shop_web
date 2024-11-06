import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';

import { CustomerPageComponent } from './page/customer.page.component';
import { ProductsComponent } from './products/products.component';
// import { OrdersComponent } from './orders/orders.component';
import {SharedModule} from "../shared/shared.module";
import { CartComponent } from './cart/cart.component';
import {CookieService} from "ngx-cookie-service";
import {CartService} from "../../service/mock/cart.service";
import { CheckoutComponent } from './checkout/checkout.component';
import {FormsModule} from "@angular/forms";
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { StoreOrderSummaryComponent } from './order/store-order-summary/store-order-summary.component';
import { OrderItemDetailComponent } from './order/order-item-detail/order-item-detail.component';


@NgModule({
  declarations: [
    CustomerPageComponent,
    ProductsComponent,
    // OrdersComponent,
    CartComponent,
    CheckoutComponent,
    OrderListComponent,
    OrderSummaryComponent,
    StoreOrderSummaryComponent,
    OrderItemDetailComponent,
  ],
  providers:[
    CookieService,
    CartService
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(customerRoutes),
        SharedModule,
        FormsModule,
    ]
})
export class CustomerModule { }
