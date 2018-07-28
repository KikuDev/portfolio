import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.scss']
})
export class PreloadComponent implements OnInit {

  @Output() nameDisplayed = new EventEmitter<boolean>();

  constructor() { }

  letters:Array<string> = [
    'B', 'i', 'z', 'e', 't', ' ', 'G', 'r', 'é', 'g', 'o', 'r', 'y'
  ]

  showName:boolean = false;
  showJob:boolean = false;
  entered:boolean = false;

  async enter() {
    const letters = document.getElementsByClassName('letters');
    this.entered = true;

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    for (let i = 0; i < letters.length; i++) {
      await delay(100);
      const letter = letters[i];
      letter.classList.add('fade');
    }

    setTimeout(() => {
      this.showName = true;
      setTimeout(() => {
        this.showJob = true;
        this.nameDisplayed.emit();
      }, 900);
    }, 2200);
  }

  ngOnInit() {
  }

}
