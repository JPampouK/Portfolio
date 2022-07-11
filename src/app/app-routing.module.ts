import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { StartComponent } from './start/start.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

const routes: Routes = [
  {path: "Janis", component: StartComponent},
  {path: "Impressum", component: ImpressumComponent},
  { path: "", redirectTo: "/Janis", pathMatch: "full"}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
