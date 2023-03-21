import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  nowType: string = "de";
  private currentLang: BehaviorSubject<string> = new BehaviorSubject(this.nowType);


  constructor(private translateService: TranslateService) {
    this.translateService.use('de');
   }


   changeLanguage(type: string){
     this.translateService.use(type);
     this.nowType = type;
     this.updateCurrentLang();
   }

   private updateCurrentLang() {
    this.currentLang.next(this.nowType);
  }

  getCurrentLang(): Observable<string> {
    return this.currentLang.asObservable();
  }
}
