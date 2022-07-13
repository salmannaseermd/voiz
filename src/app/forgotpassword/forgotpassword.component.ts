import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  forgot() {
    this._service.registerUserFromRemote1(this.user).subscribe(
      (data) => {
        console.log("response recieved");


      },
      (error) => {
        console.log("exception occured");

      }

    )

  }
}
