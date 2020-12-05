import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { MichaelOverviewComponent } from './components/michael-overview/michael-overview.component';
import { StephanieOverviewComponent } from './components/stephanie-overview/stephanie-overview.component';

const routes: Routes = [
  {path: 'stephanie' , component: StephanieOverviewComponent},
  {path: 'michael' , component: MichaelOverviewComponent},
  {path: 'us' , component: LandingComponent},
  {path: '',  redirectTo: '/us', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
