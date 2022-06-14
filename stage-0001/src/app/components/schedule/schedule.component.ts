import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Sarc2Service } from '../../services/core/sarc2.service';
import { IScheduleInstance } from '../../models/scheduleInstance.interface'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {

  info?:IScheduleInstance;

  constructor(private api:Sarc2Service, private activeRoute:ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    //let legacyId:number = Number(this.activeRoute.snapshot.paramMap.get('legacyId'));
    //console.log(legacyId);
    this.api.getScheduleInstance('d5a14043-1dd4-431a-87c7-e21e1283e3af').subscribe(data => {
      this.info = <IScheduleInstance>data;
      //this.schedule.name = 'XXX';
      console.log(this.info.schedule.name);
    });
  }

}

