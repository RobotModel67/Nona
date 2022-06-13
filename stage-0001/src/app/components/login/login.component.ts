import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sarc2Service } from '../../services/core/sarc2.service';
import { LoginI } from '../../models/login.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
      userControl : new FormControl('', Validators.required),
      pwdControl : new FormControl('', Validators.required)
  });

  constructor( private service:Sarc2Service, private router:Router) { }

  ngOnInit(): void {
    this.checkCurrentUser();
  }

  checkCurrentUser() {
    if(localStorage.getItem("currentUser")){
      let legacyId = localStorage.getItem("currentUser");
      this.router.navigate(["dashboard/" + legacyId]);
    }
  }

  onLogin(userForm: any) {
    console.log(userForm)

    let login = { 
      username: userForm.userControl!,
      password: userForm.pwdControl!
    }
    //this.router.navigate(['dashboard']);

    //console.log(login)
    this.service.loginOperation(login).subscribe(
      data => {
        console.log(data);
        localStorage.setItem("currentUser", data.legacyId.toString());
        this.router.navigate(['dashboard', data.legacyId]);
      });
  }

}
