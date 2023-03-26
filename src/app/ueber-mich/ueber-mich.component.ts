import { Component, OnInit } from '@angular/core';
import { SendMailService } from '../send-mail.service';
import { TranslateConfigService } from '../translate-config.service';
import { Subscription } from 'rxjs';
import { DarkLightThemeService } from '../dark-light-theme.service';


@Component({
  selector: 'app-ueber-mich',
  templateUrl: './ueber-mich.component.html',
  styleUrls: ['./ueber-mich.component.scss']
})
export class UeberMichComponent implements OnInit {
  constructor(public _sendMail: SendMailService, private _darklightTheme: DarkLightThemeService, private translate: TranslateConfigService) { }
  currentTheme: string;
  currentLang: string;
  private subscription: Subscription;
  screenWidth: number;

  
  ngOnInit() {
    this.subscription = this._darklightTheme.getCurrentTheme().subscribe(theme => {
      this.currentTheme = theme;
    });

    this.subscription = this.translate.getCurrentLang().subscribe(lang => {
      this.currentLang = lang;
    });

    this.screenWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
