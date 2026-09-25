import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setRandomGradientBackground();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setRandomGradientBackground();
      }
    });
  }

  setRandomGradientBackground(): void {
    const colors = Array.from({ length: 2 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
    const headerContainer = document.querySelector('.header-container') as HTMLElement | null;
    if (headerContainer) {
      headerContainer.style.background = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
    }
  }
}
