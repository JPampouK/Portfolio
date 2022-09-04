import { Component, OnInit } from '@angular/core';
import deutsch from "src/assets/i18n/de.json";
import englisch from "src/assets/i18n/en.json";
import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-projekt-dialog',
  templateUrl: './projekt-dialog.component.html',
  styleUrls: ['./projekt-dialog.component.scss']
})
export class ProjektDialogComponent implements OnInit {

  constructor(public translate: TranslateConfigService) { }
  projekte: any = deutsch;
  projekteEN: any = englisch;

  ngOnInit() {
  }

}
