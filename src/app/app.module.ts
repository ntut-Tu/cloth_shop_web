import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeLoginPageComponent } from './component/home/login.page/home.login.page.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './component/shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeLoginPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
