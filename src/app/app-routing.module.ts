import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "login" , component : LoginComponent },
  {path : "signup" , component : SignupComponent },
  {path : "trustmark" , loadChildren: () => import("./trust-mark/trust-mark.module").then( m => m.TrustMarkModule) },
  {path : "resources" , loadChildren: () => import("./resources/resources.module").then( m => m.ResourcesModule) },
  {path : "training" , loadChildren: () => import("./training/training.module").then( m => m.TrainingModule) },
  {path : "community" , loadChildren: () => import("./community/community.module").then( m => m.CommunityModule) },
  {path : "**" , component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
