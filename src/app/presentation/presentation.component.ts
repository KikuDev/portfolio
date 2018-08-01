import { Component, OnInit, HostBinding } from '@angular/core';
import { disappear } from '../animation';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [ disappear ]
})
export class PresentationComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  img:string = '../../assets/img/me.jpg';
  entered:boolean = false;

  constructor() {
   }


  ngOnInit() {
    setTimeout(() => {
      this.entered = true;
   }, 10);
  }

}
