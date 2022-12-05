import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfigurationService } from './common/configuration-service';
//import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { StandardRulesResolver } from './standardrules/standardrules-resolver.service';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full'},
  {
    path: 'standard-rules',
    data: { name: 'standardrules', title: 'Standard Rules' },
    outlet: 'mainContent',
    loadChildren: () => import('./standardrules/standardrules.module').then(m => m.StandardrulesModule)
  }
  // ,
  // { path: '**', component: EmptyRouteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const AppRoutingModule = RouterModule.forRoot(routes, {
//   relativeLinkResolution: 'legacy',
// });
