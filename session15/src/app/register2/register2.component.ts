import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  msg=""
  user = {
    name:"",
    age:"",
    email:"",
    gender:"",
    password:"",
    phone:""
  }
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  onRegister(userData:NgForm){
    if(userData.valid){
      console.log(this.user)
      this._data.register(this.user).subscribe(
        (data)=>{ 
this.msg= data.message
        },
        (e) => {
          this.msg=e.error.message
          console.log(e.error.message)
        },
        ()=>{
          userData.resetForm()
        }
        )
      
    }
  }
  test(x:any){
    console.log(x)
  }
}
