import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { AddprepaidplanComponent } from './addprepaidplan/addprepaidplan.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LoginsuccessComponent,

    ForgotpasswordComponent,
     VerifyotpComponent,
     PrepaidComponent,
     AddprepaidplanComponent,
     AdminregistrationComponent,
     AdminloginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
