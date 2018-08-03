import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  showNav:boolean = false;
  loading;

  constructor(private router: Router) {
    this.loading = true;
  }

  display() {
    setTimeout(() => {
      this.showNav = true;
    }, 500);
  }

  ngAfterViewInit() {
    console.log('view init');
    this.router.events
        .subscribe((event) => {
            if(event instanceof NavigationStart) {
              this.loading = true;
              console.log('loading');
            }
            else if (event instanceof NavigationEnd || 
              event instanceof NavigationCancel) {
              this.loading = false;
              console.log('loaded');
            }
        });
  }
}
