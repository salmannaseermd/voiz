import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { plans } from '../plans';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css']
})
export class PrepaidComponent implements OnInit {

  plans: plans[];
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.getplans();
  }
  private getplans() {
    this._service.getPrepaidplan().subscribe(data => {
      this.plans = data;
    });
  }

}
