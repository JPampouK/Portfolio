import { Component, OnInit } from '@angular/core';
import { DarkLightThemeService } from './dark-light-theme.service';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
declare var gtag;
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(public _darklight: DarkLightThemeService, private http: HttpClient, router: Router, public cookieBanner: CookieBannerComponent) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );

    navEndEvents.subscribe((event: NavigationEnd) => {
      if (this.cookieBanner.isConsentGiven) {
        gtag('config', 'G-KZ6ENG1JQG', {
          'page_path': event.urlAfterRedirects
        });
      }
    })
  }
  ngOnInit() {
    this._darklight.setTheme();
  }
}
