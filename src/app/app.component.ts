import { Component , OnInit} from '@angular/core';
import { DarkLightThemeService } from './dark-light-theme.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

  constructor(public _darklight: DarkLightThemeService, private http: HttpClient ) {}
  ngOnInit(){
      this._darklight.setTheme();
  }
}
