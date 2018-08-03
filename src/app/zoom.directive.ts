import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private el: ElementRef) { }


  @HostListener('click', ['$event.target']) onClick(btn) {
    const jobs = document.getElementsByClassName('job');
    const thisJobId = this.el.nativeElement.id;
    const thisElement = this.el.nativeElement;
    const backgray = document.getElementsByClassName('backgray')[0];
    const background = document.getElementsByClassName('background')[0];
    const navbar = document.getElementsByClassName('navbar')[0];
    const leftName = document.getElementsByClassName('name')[0];

    this.el.nativeElement.classList.toggle('enlarged');

    if (!document.getElementsByClassName(`button${thisJobId}`)[0].classList.contains('displayed')) {
      setTimeout(() => {
        document.getElementsByClassName(`button${thisJobId}`)[0].classList.add('displayed');
      }, 800);
    }

    function addEnlargedClass(id) {
      if (id === 0) {
        backgray.classList.toggle('enlarged');
        background.classList.toggle('enlarged');
        navbar.classList.toggle('enlarged');
        leftName.classList.toggle('enlarged');
        const project1 = document.getElementsByClassName(`project-1`)[0];
        const jobName1 = document.getElementsByClassName(`job__name--1`)[0];
        const backCard1 = document.getElementsByClassName(`back-1`)[0];

        if (!thisElement.classList.contains('enlarged')) {
          project1.classList.remove('opening');
          project1.classList.add('closing');
          setTimeout(() => {
            project1.classList.remove('opened');
            project1.classList.remove('closing');
            project1.classList.add('closed');
          }, 820);
          jobName1.classList.remove('slideDown');
          backCard1.classList.remove('goTransparent');
        } else {
          project1.classList.remove('closing');
          project1.classList.add('opening');
          setTimeout(() => {
            project1.classList.remove('closed');
            project1.classList.remove('opening');
            project1.classList.add('opened');
          }, 820);
          jobName1.classList.add('slideDown');
          backCard1.classList.add('goTransparent');
        }
      } else {
        backgray.classList.toggle(`enlarged${id}`);
        background.classList.toggle(`enlarged${id}`);
        navbar.classList.toggle(`enlarged${id}`);
        leftName.classList.toggle(`enlarged${id}`);
        const project = document.getElementsByClassName(`project-${id}`)[0];
        const jobName = document.getElementsByClassName(`job__name--${id}`)[0];
        const backCard = document.getElementsByClassName(`back-${id}`)[0];

        if (!thisElement.classList.contains('enlarged')) {
          project.classList.remove('opening');
          project.classList.add('closing');
          setTimeout(() => {
            project.classList.remove('opened');
            project.classList.remove('closing');
            project.classList.add('closed');
          }, 820);
          jobName.classList.remove('slideDown');
          backCard.classList.remove('goTransparent');
        } else {
          project.classList.remove('closing');
          project.classList.add('opening');
          setTimeout(() => {
            project.classList.remove('closed');
            project.classList.remove('opening');
            project.classList.add('opened');
          }, 820);
          jobName.classList.add('slideDown');
          backCard.classList.add('goTransparent');
        }
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
