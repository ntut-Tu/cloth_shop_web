import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginPageComponent } from "./component/home/login.page/home.login.page.component";
import { HomeRegisterPageComponent } from "./component/home/register.page/home.register.page.component";
import { EntryPageComponent } from "./component/home/entry.page/entry.page.component";

// 路由配置
export const routes: Routes = [
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
  },
  {
    path: 'guest',
    loadChildren: () => import('./component/guest/guest.module').then(m => m.GuestModule)
  },
  { path: 'entry', component: EntryPageComponent },
  { path: '', redirectTo: '/entry', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
