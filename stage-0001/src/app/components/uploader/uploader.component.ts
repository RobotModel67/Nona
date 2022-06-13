import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})

export class UploaderComponent implements OnInit {

  fileName = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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

