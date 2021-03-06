import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
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
  constructor(){
  }

  ngOnInit() {
  }

}
