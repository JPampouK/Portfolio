import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {

  constructor(private cookieService: CookieService) {}

  onAccept() {
    this.cookieService.set('cookieConsent', 'true');
  }

  get isConsentGiven() {
    return this.cookieService.get('cookieConsent') === 'true';
  }
}