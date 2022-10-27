import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// MODULE
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
// COMPONENTS
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
