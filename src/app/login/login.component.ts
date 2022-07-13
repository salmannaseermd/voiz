import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = new User();

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {

    this._service.loginUserFromRemote(this.user).subscribe(

      (data) => {
        //success
        console.log(data);
        // alert('success');
        this._router.navigate(['/loginsuccess'])
      },
      (error) => {
        //error
        console.log(error);
        alert('exception occured');
      }
    );


  }

}
