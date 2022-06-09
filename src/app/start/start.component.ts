import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() { }

  emailString: string = " ";
  fehler: boolean = false;


  ngOnInit() {
  }
  myFunction() {


    
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  sendMail() {
    let mail = (<HTMLInputElement>document.getElementById("input"));
    let text = (<HTMLInputElement>document.getElementById("textarea"));

    this.emailString = "mailto:janis@pampoukidis.de?Subject=Nachricht von " + mail.value + " &body=" + text.value;
    text.value = "";
    mail.value = "";
  }

}
