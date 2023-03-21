import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkLightThemeService {
  private storedTheme: string = localStorage.getItem('theme-color');
  private currentTheme: BehaviorSubject<string> = new BehaviorSubject(this.storedTheme);

  setTheme() {
    if (this.storedTheme === 'theme-light') {
      localStorage.setItem('theme-color', 'theme-dark');
      this.storedTheme = 'theme-dark';
    } else {
      localStorage.setItem('theme-color', 'theme-light');
      this.storedTheme = 'theme-light';
    }
    this.updateCurrentTheme();
  }

  get getTheme() {
    return this.storedTheme;
  }

  private updateCurrentTheme() {
    this.currentTheme.next(this.storedTheme);
  }

  getCurrentTheme(): Observable<string> {
    return this.currentTheme.asObservable();
  }
}
