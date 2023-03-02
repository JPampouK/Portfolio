import { Component, OnInit, ElementRef  } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';
import { DarkLightThemeService } from '../dark-light-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private elementRef: ElementRef, public translateConfigService: TranslateConfigService, public _darklight: DarkLightThemeService) { }

  ngOnInit() {
  }

  scrollToSection(section: string) {
    const element = document.querySelector('#' + section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
