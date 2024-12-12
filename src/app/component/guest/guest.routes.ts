import {Routes} from "@angular/router";
import {GuestPageComponent} from "./page/guest.page.component";
import {NewFeatureTestComponent} from "./new-feature-test/new-feature-test.component";
import {NewStyleGProductComponent} from "./new-style-g-product/new-style-g-product.component";

export const guestRoutes: Routes = [
  {
    path: '',
    component: GuestPageComponent,
    children: [
      { path: 'products', component: NewStyleGProductComponent },
      // { path: 'login', component: HomeLoginPageComponent },
      { path: 'new-feature-test', component: NewFeatureTestComponent },
      // {path: 'feature-test', component: AddCouponTestComponent}
    ]
  },
];
