import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private translateService: TranslateService) {
    this.translateService.use('de');
   }

   changeLanguage(type: string){
    console.log(type);
    this.translateService.use(type);
   }
}
