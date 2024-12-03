import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'cloth_shop_web';
  constructor(private router: Router) {}
  showHeader = false;
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !event.url.includes('/entry');
        console.log(event.url);
      }
      if (this.showHeader && event instanceof NavigationStart) {
        this.showHeader = !event.url.includes('/entry');
        console.log(event.url);
      }
      if (this.showHeader && (event instanceof NavigationStart||event instanceof NavigationEnd)) {
        if(event.url==='/'){
          this.showHeader = false;
          console.log(event.url);
        }
      }
    });
  }
}
