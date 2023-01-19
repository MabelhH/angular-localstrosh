import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbartComponent } from './navbart/navbart.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    NavbartComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ComponentsModule,
    MatMenuModule,
    



  ],
  exports:[
    NavbartComponent
  ]
})
export class MenuModule { }
