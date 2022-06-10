import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomersService } from '../../services/core/customers.service';
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

  constructor( private service:CustomersService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(userForm: any) {
    let login = { 
      username: userForm.userControl!,
      password: userForm.pwdControl!
    }
    //this.router.navigate(['dashboard']);

    //console.log(login)
    this.service.loginOperation(userForm).subscribe(
      data => {
        console.log(data)
        //this.router.navigate(['dashboard']);
      });
  }

}
