import {ProductsComponent} from "../customer/products/products.component";
import {Routes} from "@angular/router";
import {GuestPageComponent} from "./page/guest.page.component";
import {HomeLoginPageComponent} from "../home/login.page/home.login.page.component";
import {NewFeatureTestComponent} from "./new-feature-test/new-feature-test.component";
import {NewStyleOrderComponent} from "../customer/new-style-order/new-style-order.component";

export const guestRoutes: Routes = [
  {
    path: '',
    component: GuestPageComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      // { path: 'login', component: HomeLoginPageComponent },
      { path: 'new-feature-test', component: NewFeatureTestComponent },
      {path: 'feature-test', component: NewStyleOrderComponent}
    ]
  },
];
