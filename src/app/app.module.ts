import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StephanieProfessionalComponent } from './components/stephanie-professional/stephanie-professional.component';
import { MichaelProfessionalComponent } from './components/michael-professional/michael-professional.component';
import { StephanieFunComponent } from './components/stephanie-fun/stephanie-fun.component';
import { MichaelFunComponent } from './components/michael-fun/michael-fun.component';
import { StephanieOverviewComponent } from './components/stephanie-overview/stephanie-overview.component';
import { MichaelOverviewComponent } from './components/michael-overview/michael-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StephanieProfessionalComponent,
    MichaelProfessionalComponent,
    StephanieFunComponent,
    MichaelFunComponent,
    StephanieOverviewComponent,
    MichaelOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
