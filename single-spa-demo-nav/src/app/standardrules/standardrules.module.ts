import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardrulesComponent } from './standardrules/standardrules.component';
import { StandardrulesRoutingModule } from './standardrules-routing.module';



@NgModule({
  declarations: [
    StandardrulesComponent
  ],
  imports: [
    CommonModule,
    StandardrulesRoutingModule
  ]
})
export class StandardrulesModule { }
