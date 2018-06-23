import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloPageComponent } from './hello-page/hello-page.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { CoolSpotComponent } from './cool-spot/cool-spot.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { YourGlassesComponent } from './your-glasses/your-glasses.component';
import { NextVisitComponent } from './next-visit/next-visit.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { YourVisionComponent } from './your-vision/your-vision.component';
const routes: Routes = [
    { path: '', redirectTo: '/hello', pathMatch: 'full' },
    { path: 'login-register', component: LoginRegisterComponent },
    { path: 'hello', component: HelloPageComponent },
    { path: 'cool-spot', component: CoolSpotComponent },
    { path: 'delivered', component: DeliveredComponent },
    { path: 'glasses', component: YourGlassesComponent },
    { path: 'next-visit', component: NextVisitComponent },
    { path: 'prescription', component: PrescriptionComponent },
    { path: 'your-vision', component: YourVisionComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoute { }




