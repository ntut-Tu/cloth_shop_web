import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeLoginPageComponent } from './component/home/login.page/home.login.page.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './component/shared/header/header.component';
import {HomeRegisterPageComponent} from "./component/home/register.page/home.register.page.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeLoginPageComponent,
    HeaderComponent,
    HomeRegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
