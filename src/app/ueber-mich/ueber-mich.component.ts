import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ueber-mich',
  templateUrl: './ueber-mich.component.html',
  styleUrls: ['./ueber-mich.component.scss']
})
export class UeberMichComponent implements OnInit {
  emailString: string = " ";
  constructor() { }

  ngOnInit() {
  }

  sendMail() {
    let mail = (<HTMLInputElement>document.getElementById("input"));
    let text = (<HTMLInputElement>document.getElementById("textarea"));

    this.emailString = "mailto:janis@pampoukidis.de?Subject=Nachricht von " + mail.value + " &body=" + text.value;
    text.value = "";
    mail.value = "";
  }

}
