import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { plans } from './plans';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/login", user);
  }
  // public forgotpassword(user: User): Observable<any> {
  //   return this._http.post<any>("http://localhost:8080/send-otp", user);
  // }
  public updateUserPasswordFromRemote(id4: string, pass: string): Observable<any> {
    return this._http.put<any>("http://localhost:8080/updatepassword/" + id4, pass)
  }
  public registerUserFromRemote1(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/forgotpassword", user);
  }
  public addprepaidplan(plans: plans): Observable<Object> {
    return this._http.post<any>("http://localhost:8080/addprepaidplan", plans);
  }

  getPrepaidplan(): Observable<plans[]> {
    return this._http.get<plans[]>("http://localhost:8080/plans");
  }

  public adminlogin(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/adminlogin", user);
  }

}
