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

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementsByClassName('flipcard')[0].classList.toggle('flip');      
    }, 50);
  }

}
