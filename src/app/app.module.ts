import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomepageLoginPageComponent } from './component/homepage.login.page/homepage.login.page.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './component/shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageLoginPageComponent,
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
