import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImpressumComponent } from './impressum/impressum.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UeberMichComponent } from './ueber-mich/ueber-mich.component';
import { SkillsComponent } from './skills/skills.component';
import { WerdegangComponent } from './werdegang/werdegang.component';
import { PorjekteComponent } from './porjekte/porjekte.component';
import { FooterComponent } from './footer/footer.component';
import { SendMailService } from './send-mail.service';


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
    PorjekteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  providers: [SendMailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
