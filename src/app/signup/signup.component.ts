import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }


  public user = {

    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    mobileNumber: '',
    adharNumber: '',
    password: '',
    type: ''

  };



  ngOnInit(): void { }

  formSubmit() {
    console.log(this.user);
    if (
      this.user.firstName == '' || this.user.firstName == null
      || this.user.lastName == '' || this.user.lastName == null
      || this.user.password == '' || this.user.password == null
      || this.user.email == '' || this.user.email == null) {
      alert('Please enter all the details');
      return;

    }

    //addUser: userservice

    this.userService.addUser(this.user).subscribe(
      (data) => {
        //success
        console.log(data);
        alert('success');
      },
      (error) => {
        //error
        console.log(error);
        alert('Select another user name');
      }
    );


  }



}
