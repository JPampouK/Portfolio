import { Component, OnInit } from '@angular/core';
import { SendMailService } from '../send-mail.service';

@Component({
  selector: 'app-ueber-mich',
  templateUrl: './ueber-mich.component.html',
  styleUrls: ['./ueber-mich.component.scss']
})
export class UeberMichComponent implements OnInit {
  constructor(public _sendMail: SendMailService) { }
  currentDate = new Date();
  ngOnInit() {
  }

}
