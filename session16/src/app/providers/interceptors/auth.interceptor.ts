import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _global:GlobalService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('testToken')
    if(token){
      this._global.isAuthed=true
      request = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`)
      })
    }
    return next.handle(request);
  }
}
