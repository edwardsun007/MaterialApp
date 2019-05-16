import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// components
import { LandingComponent } from "./landing/landing.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { TrainingComponent } from "./training/training.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "training", component: TrainingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // set the above routes under root
  exports: [RouterModule]
})
export class AppRoutingModule {}
