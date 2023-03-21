import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProjektDialogComponent } from './projekt-dialog/projekt-dialog.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { SkillsComponent } from './skills/skills.component';
import { StartComponent } from './start/start.component';
import { UeberMichComponent } from './ueber-mich/ueber-mich.component';
import { WerdegangComponent } from './werdegang/werdegang.component';
import { SendMailService } from './send-mail.service';

export function rootLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ImpressumComponent,
    ProjektDialogComponent,
    ProjekteComponent,
    SkillsComponent,
    StartComponent,
    UeberMichComponent,
    WerdegangComponent
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
    }),
    MatSlideToggleModule,
    FormsModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [SendMailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

