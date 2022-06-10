import { Injectable } from '@angular/core';

import {LoginI} from '../../models/login.interface';
import {LoginResponseI} from '../../models/loginResponse.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CustomersService {

  //url:string = 'http://localhost:8080/resources/';
  url:string = '/api/';

  constructor(private http:HttpClient) { }

  loginOperation(form:LoginI):Observable<LoginResponseI>{
    let address = this.url + "auth";
    return this.http.post<LoginResponseI>(address,form);
  }
}
