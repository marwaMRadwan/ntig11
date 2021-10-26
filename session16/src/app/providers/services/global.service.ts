import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public isAuthed = false
  public imgUrl = "http://medical.marwaradwan.org/storage/app/public/"
  apiMainUrl = "http://localhost:3000/"
  constructor(private _http:HttpClient) { }

  getAllRoles():Observable<any>{
    return this._http.get('http://medical.marwaradwan.org/api/auth/loadRoles/1')
  }

  registerUser(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}user/register`, user)
  }
  login(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}user/login`, user)
  }
  profile():Observable<any>{
    return this._http.get(`${this.apiMainUrl}user/profile`)
  }
}
