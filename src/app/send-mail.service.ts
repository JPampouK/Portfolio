import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  emailString: string = " ";

  constructor() { }

  sendMail() {
    let mail = (<HTMLInputElement>document.getElementById("input"));
    let text = (<HTMLInputElement>document.getElementById("textarea"));

    this.emailString = "mailto:janis@pampoukidis.de?Subject=Nachricht von " + mail.value + " &body=" + text.value;
    text.value = "";
    mail.value = "";
  }
}
