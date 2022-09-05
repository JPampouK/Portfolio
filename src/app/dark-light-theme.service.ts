import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkLightThemeService implements OnInit{

  constructor() { }
  storedTheme: string = localStorage.getItem('theme-color');
  ngOnInit(){
    localStorage.setItem('theme-color', 'theme-dark');
    this.storedTheme = localStorage.getItem('theme-color');
  }

  setTheme(){
    if(this.storedTheme === 'theme-light'){
      localStorage.setItem('theme-color', 'theme-dark');
      this.storedTheme = localStorage.getItem('theme-color');
    }else{
      localStorage.setItem('theme-color', 'theme-light');
      this.storedTheme = localStorage.getItem('theme-color');
    }
  }
}
