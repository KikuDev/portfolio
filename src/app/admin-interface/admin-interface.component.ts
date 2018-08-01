import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.scss']
})
export class AdminInterfaceComponent implements OnInit {
  loginImg:string = '../../assets/img/login-icon.svg';
  unavailable:boolean = false;

  shake() {
    this.unavailable = true;
    setTimeout(() => {
      this.unavailable = false;
    }, 310);
  }

  constructor() { }

  ngOnInit() {
  }

}
