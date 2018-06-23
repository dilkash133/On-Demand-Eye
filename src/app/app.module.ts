import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HelloPageComponent } from './hello-page/hello-page.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AppRoute } from './app.route';
import { CoolSpotComponent } from './cool-spot/cool-spot.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { YourGlassesComponent } from './your-glasses/your-glasses.component';
import { NextVisitComponent } from './next-visit/next-visit.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { YourVisionComponent } from './your-vision/your-vision.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HelloPageComponent,
    LoginRegisterComponent,
    CoolSpotComponent,
    DeliveredComponent,
    YourGlassesComponent,
    NextVisitComponent,
    PrescriptionComponent,
    YourVisionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
