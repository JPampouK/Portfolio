import { Component, OnInit } from '@angular/core';
import { SendMailService } from '../send-mail.service';
import countapi from 'countapi-js';

@Component({
  selector: 'app-ueber-mich',
  templateUrl: './ueber-mich.component.html',
  styleUrls: ['./ueber-mich.component.scss']
})
export class UeberMichComponent implements OnInit {
  constructor(public _sendMail: SendMailService) { }
  countEL = document.getElementById('count');
  counter: number;

  ngOnInit() {
    this.updateVisitorCount();
  }
  updateVisitorCount() {
    fetch('https://api.countapi.xyz/update/janispampoukidis.duckdns.org/youtube/?amount=1')
      .then(res => res.json())
      .then(res => {
        console.log(res.value);
        this.counter = res.value;
      })
  } 
}
