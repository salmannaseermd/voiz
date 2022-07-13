import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprepaidplanComponent } from './addprepaidplan/addprepaidplan.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { PrepaidComponent } from './prepaid/prepaid.component';

import { SignupComponent } from './signup/signup.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'loginsuccess',
    component: LoginsuccessComponent,
    pathMatch: 'full'
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'verifyotp',
    component: VerifyotpComponent,
    pathMatch: 'full'
  },
  {
    path: 'prepaidplan',
    component: PrepaidComponent,
    pathMatch: 'full'

  },
  {
    path: 'addprepaidplan',
    component: AddprepaidplanComponent,
    pathMatch: 'full'
  },
  {
    path: 'adminregister',
    component: AdminregistrationComponent,
    pathMatch: 'full'
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent,
    pathMatch: 'full'
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
