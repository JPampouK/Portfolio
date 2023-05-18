import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(400),
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  constructor() {
  }
  counter: number;
  visitorCount: number = 0;


  ngOnInit() {
    if (window.innerWidth < 1120) {
      $('#infoModal').modal('show');
    }

    // Besucher zählen
    this.updateVisitorCount();
  }

  scrollToSection(section: string) {
    const element = document.querySelector('#' + section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  updateVisitorCount() {
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      this.visitorCount = parseInt(storedCount, 10);
    }
    this.visitorCount++;
    localStorage.setItem('visitorCount', this.visitorCount.toString());
  }

}
