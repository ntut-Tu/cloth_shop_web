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
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { EntryPageComponent } from './component/home/entry.page/entry.page.component';
import {MatButton} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeLoginPageComponent,
    HeaderComponent,
    HomeRegisterPageComponent,
    EntryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButton,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
