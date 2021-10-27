import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoaded = false
  constructor(public _global:GlobalService, public _router:Router) { }

  ngOnInit(): void {
    this._global.profile().subscribe(
      (data)=> {this._global.userData = data.data; this._global.isAuthed=true},
      (e)=>{this._global.isAuthed=false, this.isLoaded=true},
      ()=>{ this.isLoaded=true}
    )
  }
  logout(){
    this._global.logout().subscribe(
      (data)=>{},
      (e)=>{},
      ()=>{
        localStorage.removeItem('testToken')
        this._global.isAuthed=false
        this._global.userData=null
        this._router.navigateByUrl('/')            
      }
    )

  }
}
