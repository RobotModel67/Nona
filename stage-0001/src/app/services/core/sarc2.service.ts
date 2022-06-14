import { Injectable } from '@angular/core';

import {LoginI} from '../../models/login.interface';
import {LoginResponseI} from '../../models/loginResponse.interface';
import {ISource} from '../../models/source.interfaces';
import {IfileUpload} from '../../models/fileUpload.Iinterface';



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IScheduleInstance } from 'src/app/models/scheduleInstance.interface';



@Injectable({
  providedIn: 'root'
})

export class Sarc2Service {

  url:string = '/api/';

  constructor(private http:HttpClient) { }

  loginOperation(form:LoginI):Observable<LoginResponseI>{
    //let address = this.url + "auth/user/1";
    let address = this.url + "auth/user/search";
    return this.http.post<LoginResponseI>(address,form);
  }

  getSourcesByLegacy(id:number):Observable<ISource[]>{
    let address = this.url + "sources/legacy/" + id;
    return this.http.get<ISource[]>(address);
  }

  getScheduleInstance(uuid:string):Observable<IScheduleInstance>{
    let address = this.url + "schedules/instances/" + uuid;
    return this.http.get<IScheduleInstance>(address);
  }
}
