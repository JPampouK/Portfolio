import { Component, OnInit, HostListener } from '@angular/core';
import { SendMailService } from '../send-mail.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public _sendMail: SendMailService) { }

  ngOnInit() {
  }

  

  // Scroll Button Functions
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.scrollFunction();
  }

  scrollFunction() {
    var backToTopBtn = document.getElementById("oben");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }
}
