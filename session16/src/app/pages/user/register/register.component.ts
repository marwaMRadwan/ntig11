import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData = { name:"", gender:"", age:"", email:"", password:"", phone:"" }
  emailError = ""
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
  }
  register(registerUser:NgForm){
    if(registerUser.valid){
      this._global.registerUser(this.userData).subscribe(
        (res)=>{},
        (err)=>{
          if(err.error.data.includes('email')) this.emailError="email used before"
        },
        ()=>{
          this.emailError=""
          registerUser.resetForm()
        }//final
      )
    }
  }
}
