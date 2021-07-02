import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../core.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedin: boolean;
  email: string;
  name: string;
  password: string;
  password2: string;
  message: string;
  age: number;
  gender: string;

  constructor(private core: CoreService, private route: Router) { }

  ngOnInit(): void {
    this.loggedin=true;
    this.email="";
  }
  login(){
      this.core.login({email: this.email , password: this.password })
          .subscribe(
            res => {
                      localStorage.setItem('name',res.data.name);
                      this.route.navigateByUrl(`/playlist`);
                  },
            err => {
              this.message = err.error.message;
            }
          );
    }
  signup(){
    if(this.password != this.password2){
      this.message="password do not match";
      return;
    }
    this.core.signup(
    {"name": this.name,
    "email":this.email,
    "password": this.password,
    "age": this.age,
    "gender": 'm'}
    )
    .subscribe(
      res => {

                localStorage.setItem('name',this.name);
                this.route.navigateByUrl(`/playlist`);
            },
      err => {
                this.message = err.error.message;
      }
    );
  }
  toggle(){
    this.loggedin=!this.loggedin;
  }
}
