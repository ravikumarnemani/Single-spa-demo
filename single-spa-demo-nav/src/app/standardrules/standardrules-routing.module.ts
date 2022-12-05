import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardrulesComponent } from './standardrules/standardrules.component';


const routes: Routes = [
  {
    path: '',
    outlet: 'mainContent',
    component: StandardrulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardrulesRoutingModule { }
//export const StandardrulesRoutingModule = RouterModule.forChild(routes);