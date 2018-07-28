import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showNav:boolean = false;

  display() {
    setTimeout(() => {
      this.showNav = true;
    }, 500);
  }

  ngOnInit() {
  }
}
