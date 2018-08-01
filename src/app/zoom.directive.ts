import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event.target']) onClick(btn) {
    const jobs = document.getElementsByClassName('job');
    const thisJobId = this.el.nativeElement.id;

    this.el.nativeElement.classList.toggle('enlarged');

    function addEnlargedClass(id) {
      if (id === 0) {
        document.getElementsByClassName('backgray')[0].classList.toggle('enlarged');
        document.getElementsByClassName('background')[0].classList.toggle('enlarged');
        document.getElementsByClassName('navbar')[0].classList.toggle('enlarged');
        document.getElementsByClassName('name')[0].classList.toggle('enlarged');
      } else {
        document.getElementsByClassName('backgray')[0].classList.toggle(`enlarged${id}`);
        document.getElementsByClassName('background')[0].classList.toggle(`enlarged${id}`);
        document.getElementsByClassName('navbar')[0].classList.toggle(`enlarged${id}`);
        document.getElementsByClassName('name')[0].classList.toggle(`enlarged${id}`);
      }
    }
    
    switch (thisJobId) {
      case '1':

        for (let i = 0; i < jobs.length; i++) {
          const element = jobs[i];
    
          if (element.id != thisJobId) {
            element.classList.toggle('reduce');
          }
        }
        addEnlargedClass(0);

        break;

      case '2':

        for (let i = 0; i < jobs.length; i++) {
          const element = jobs[i];
    
          if (element.id != thisJobId) {
            element.classList.toggle('reduce2');
          }
        }

        addEnlargedClass(2);
        break;

      case '3':

        for (let i = 0; i < jobs.length; i++) {
          const element = jobs[i];
    
          if (element.id != thisJobId) {
            element.classList.toggle('reduce3');
          }
        }

        addEnlargedClass(3);
        break;

      case '4':
        for (let i = 0; i < jobs.length; i++) {
          const element = jobs[i];
    
          if (element.id != thisJobId) {
            element.classList.toggle('reduce4');
          }
        }

        addEnlargedClass(4);
        break;
    
      default:
        break;
    }
  }


}
