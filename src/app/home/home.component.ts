import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { GoogleAnalyticsService } from '../google-analytics.service';

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
  constructor(private googleAnalyticsService: GoogleAnalyticsService){
  }
  counter: number;
  visitorCount: number = 0;


  ngOnInit() {
    if (window.innerWidth < 1120) {
      $('#infoModal').modal('show');
    }
    //this.updateVisitorCount();

    // this.googleAnalyticsService.getVisitorCount()
    //   .then(count => {
    //     this.visitorCount = count;
    //   });
  }

  scrollToSection(section: string) {
    const element = document.querySelector('#' + section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  updateVisitorCount() {
    fetch('https://api.countapi.xyz/update/janispampoukidis.duckdns.org/youtube/?amount=1')
      .then(res => res.json())
      .then(res => {
        this.counter = res.value;
      })
  } 

}
