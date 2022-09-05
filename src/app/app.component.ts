import { Component , OnInit} from '@angular/core';
import { DarkLightThemeService } from './dark-light-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

  constructor(public _darklight: DarkLightThemeService ) {}
  ngOnInit(){
  }

}
