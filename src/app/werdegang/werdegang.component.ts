import { Component, OnInit } from '@angular/core';
import { DarkLightThemeService } from '../dark-light-theme.service';
import { Subscription } from 'rxjs';
import { TranslateConfigService } from '../translate-config.service';


@Component({
  selector: 'app-werdegang',
  templateUrl: './werdegang.component.html',
  styleUrls: ['./werdegang.component.scss']
})
export class WerdegangComponent implements OnInit {

  constructor(private _darklightTheme: DarkLightThemeService, private _translate: TranslateConfigService) { }
  currentTheme: string;
  currentLang: string;
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this._darklightTheme.getCurrentTheme().subscribe(theme => {
      this.currentTheme = theme;
    });

    this.subscription = this._translate.getCurrentLang().subscribe(lang => {
      this.currentLang = lang;
      console.log(this.currentLang);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
