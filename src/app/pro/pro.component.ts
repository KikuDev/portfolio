import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.scss']
})
export class ProComponent implements OnInit {
  apolloLogo:string = '../../assets/img/apollo-logo.svg';
  closeButton:string = '../../assets/img/close-button.svg';
  entered:boolean = false;
  enlarged:boolean = false;
  shadow:boolean = false;

  jobs:Array<Object> = [
    {
      name: 'Apollo',
      img: '../../assets/img/apollo-logo.svg'
    },
    {
      name: 'Pearle',
      img: '../../assets/img/apollo-logo.svg'
    },
    {
      name: 'Casavox',
      img: '../../assets/img/apollo-logo.svg'
    },
    {
      name: 'Les Gourbaindises',
      img: '../../assets/img/apollo-logo.svg'
    }
  ]

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.entered = true;
      setTimeout(() => {
        this.shadow = true;
      }, 200);
   }, 10);
  }

  closeProjectView(id) {
    let element: HTMLElement = document.getElementsByClassName(`job-${id}`)[0] as HTMLElement;
    element.click();
    document.getElementsByClassName(`button${id}`)[0].classList.remove('displayed');
  }

}
