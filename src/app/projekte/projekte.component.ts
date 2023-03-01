import { Component, OnInit } from '@angular/core';
import deutsch from "src/assets/i18n/de.json";
import englisch from "src/assets/i18n/en.json";
import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-projekte',
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.scss']
})
export class ProjekteComponent implements OnInit {
  
  constructor(public translate: TranslateConfigService) { }
  
  projekte: any = deutsch;
  projekteEN: any = englisch;


  ngOnInit() {
  }

}
