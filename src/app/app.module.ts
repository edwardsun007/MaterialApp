import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module"; // import the angular module that only needed for this app
import { matchesElement } from "@angular/animations/browser/src/render/shared";
import { BankAccountComponent } from "./bank-account/bank-account.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { TrainingComponent } from "./training/training.component";
import { CurrentTrainingComponent } from "./training/current-training/current-training.component";
import { NewTrainingComponent } from "./training/new-training/new-training.component";
import { PastTrainingComponent } from "./training/past-training/past-training.component";
import { LandingComponent } from "./landing/landing.component";
@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
