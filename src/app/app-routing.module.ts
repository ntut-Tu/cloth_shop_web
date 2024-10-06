import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeLoginPageComponent} from "./component/home/login.page/home.login.page.component";
import {AdminPageComponent} from "./component/admin/page/admin.page.component";
import {VendorPageComponent} from "./component/vendor/page/vendor.page.component";
import {CustomerPageComponent} from "./component/customer/page/customer.page.component";
import {ProductsComponent} from "./component/customer/products/products.component";
import {HomeRegisterPageComponent} from "./component/home/register.page/home.register.page.component";



export const routes: Routes = [
  { path: '', component: HomeLoginPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'customer', component: CustomerPageComponent },
  { path: 'vendor', component: VendorPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: HomeLoginPageComponent },
  { path: 'register', component: HomeRegisterPageComponent },
  {
    path: 'admin',
    loadChildren: () => import('./component/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'vendor',
    loadChildren: () => import('./component/vendor/vendor.module').then(m => m.VendorModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./component/customer/customer.module').then(m => m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
