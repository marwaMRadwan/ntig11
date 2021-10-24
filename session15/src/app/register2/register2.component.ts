import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  user = {
    name:"",
    age:"",
    email:"",
    gender:"",
    password:"",
    phone:""
  }
  constructor() { }

  ngOnInit(): void {
  }
  onRegister(userData:NgForm){
    if(userData.valid){
      console.log(this.user)
    }
  }
}
