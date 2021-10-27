import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedtestGuard implements CanDeactivate<any> {
  constructor(private _router:Router , private _global:GlobalService){}
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean  {
      if(localStorage.getItem('testToken') && this._global.isAuthed) {
        this._router.navigateByUrl("/")
        return false
      }
      return true;
  }
  
}
