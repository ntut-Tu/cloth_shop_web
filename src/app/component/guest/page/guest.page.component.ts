import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {GuestLoginDialogComponent} from "../login.dialog/guest.login.dialog.component";

@Component({
  selector: 'app-guest.page',
  templateUrl: './guest.page.component.html',
  styleUrl: './guest.page.component.css'
})
export class GuestPageComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.checkCurrentRoute();

    // 當切到其他route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentRoute();
      }
    });
  }

  checkCurrentRoute(): void {
    // AI寫的確認是否點到product
    const currentRoute = this.activatedRoute.firstChild?.snapshot.url[0]?.path;
    // this.showCart = currentRoute === 'products';
  }

  login() {
    this.dialog.open(GuestLoginDialogComponent, {
      width: '400px',
      height: 'auto',
      disableClose: true, // Prevent closing by clicking outside the dialog
    });
  }
}