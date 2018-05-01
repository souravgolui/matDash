import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  baseUrl = 'http://139.59.27.25:3000/api/signin';
  constructor(private http: Http) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get username (){ return this.loginForm.get('username'); }
  get password (){ return this.loginForm.get('password'); }

  userLogin() {
    console.log(this.loginForm.value);
    this.http.post(this.baseUrl, JSON.stringify(this.loginForm.value)).subscribe(res => {
      console.log(res.json);
    });
  }
}
