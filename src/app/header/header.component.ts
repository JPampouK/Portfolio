import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translateConfigService: TranslateConfigService) { }

  ngOnInit() {
  }

}
