import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageLoginPageComponent} from "./component/homepage.login.page/homepage.login.page.component";
import {AdminPageComponent} from "./component/admin/page/admin.page.component";
import {VendorPageComponent} from "./component/vendor/page/vendor.page.component";
import {CustomerPageComponent} from "./component/customer/page/customer.page.component";



export const routes: Routes = [
  { path: '', component: HomepageLoginPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'customer', component: CustomerPageComponent },
  { path: 'vendor', component: VendorPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: HomepageLoginPageComponent },
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
