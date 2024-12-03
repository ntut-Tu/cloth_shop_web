import {ProductsComponent} from "../customer/products/products.component";
import {Routes} from "@angular/router";
import {GuestPageComponent} from "./page/guest.page.component";
import {HomeLoginPageComponent} from "../home/login.page/home.login.page.component";

export const guestRoutes: Routes = [
  {
    path: '',
    component: GuestPageComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'login', component: HomeLoginPageComponent },
    ]
  },
];
