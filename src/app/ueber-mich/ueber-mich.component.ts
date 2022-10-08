import { Component, OnInit } from '@angular/core';
import { SendMailService } from '../send-mail.service';
import { TranslateConfigService } from '../translate-config.service';


@Component({
  selector: 'app-ueber-mich',
  templateUrl: './ueber-mich.component.html',
  styleUrls: ['./ueber-mich.component.scss']
})
export class UeberMichComponent implements OnInit {
  constructor(public _sendMail: SendMailService, public translate: TranslateConfigService) { }
  objectDE: Object =  { "Janis": { "vorname": "Janis", "nachname": "Pampoukidis", "alter": 19, "ausbildung": { "als": "Fachinformatiker für Anwendungsentwicklung", "firma": "LEW Verteilnetz GmbH" } } };
  objectEN: Object =  { "Janis": { "firstname": "Janis", "lastname": "Pampoukidis", "age": 19, "training": { "as": "Developer", "company": "LEW Verteilnetz GmbH" } } };
  
  objectDEeng: Object =  { "Janis": { "vorname": "Janis", "nachname": "Pampoukidis", "alter": 19, "ausbildung": { "als": "FIA ", "firma": "LVN" } } };
  objectENeng: Object =  { "Janis": { "firstname": "Janis", "lastname": "Pampoukidis", "age": 19, "training": { "as": "Developer", "company": "LVN" } } };
  
  ngOnInit() {
  }
}
