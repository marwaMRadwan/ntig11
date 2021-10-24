import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onRegister(data:any){ 
    if(data.valid){
      console.log(data.value)
      data.reset()
    }
    else { console.log("form is invalid")}
  }
}
