import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginPageComponent } from "./component/home/login.page/home.login.page.component";
import { HomeRegisterPageComponent } from "./component/home/register.page/home.register.page.component";

// 路由配置
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
