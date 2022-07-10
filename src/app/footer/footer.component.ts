import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailString: string = " ";

  constructor() { }

  ngOnInit() {
  }
  
   // Scroll Button Functions
   @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.scrollFunction();
  } 
  
  scrollFunction() {
          var mybutton = document.getElementById("oben");
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
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
