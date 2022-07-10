import { Component, OnInit, HostListener } from '@angular/core';
import { SendMailService } from '../send-mail.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public _sendMail: SendMailService) { }

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
}
