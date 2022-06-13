import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Sarc2Service } from '../../services/core/sarc2.service';

import { ISource } from '../../models/source.interfaces'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  sources:ISource[] = [];
  fileName = '';

  constructor(private api:Sarc2Service, private activeRoute:ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    let legacyId:number = Number(this.activeRoute.snapshot.paramMap.get('legacyId'));
    console.log(legacyId);
    this.api.getSourcesByLegacy(legacyId).subscribe(data => {
      this.sources = <ISource[]>data;
    });
  }

  loadSourceFile(id:number) {
    console.log(id)
  }

  onFileSelected(event:any) {

    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("file", file);
        const upload$ = this.http.post("/api/files", formData);
        upload$.subscribe();
    }}  
}
