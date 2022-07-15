import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImpressumComponent } from './impressum/impressum.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UeberMichComponent } from './ueber-mich/ueber-mich.component';
import { SkillsComponent } from './skills/skills.component';
import { WerdegangComponent } from './werdegang/werdegang.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { FooterComponent } from './footer/footer.component';
import { SendMailService } from './send-mail.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

export function rootLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ImpressumComponent,
    HeaderComponent,
    HomeComponent,
    UeberMichComponent,
    SkillsComponent,
    WerdegangComponent,
    ProjekteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: rootLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [SendMailService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
