import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errLogin =""
  loginForm = new FormGroup({
    email: new FormControl('marwa@gmail.com',[Validators.required,  Validators.email]),
    password:new FormControl('123@Marwad', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')])
  })
  constructor(private _global:GlobalService, private router:Router) { }
  ngOnInit(): void {
  }
  get email(){ return this.loginForm.get("email")}
  get password(){ return this.loginForm.get("password")}
  login(){
    if(this.loginForm.valid){
      this._global.login(this.loginForm.value).subscribe(
        (data)=>{
          localStorage.setItem('testToken', data.data.token)
        },
        (e)=>{console.log(e); this.errLogin=e.error.data},
        ()=>{
          this.errLogin=""
this.router.navigate(["/user"])
        }
      )
    }
  }

}
