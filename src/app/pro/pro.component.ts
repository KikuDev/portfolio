import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.scss']
})
export class ProComponent implements OnInit {
  apolloLogo:string = '../../assets/img/apollo-logo.svg';
  entered:boolean = false;
  enlarged:boolean = false;

  constructor() {
  }

  displayJob() {
    this.enlarged = !this.enlarged;
  }

  ngOnInit() {
    setTimeout(() => {
      this.entered = true;
   }, 10);
  }

}
