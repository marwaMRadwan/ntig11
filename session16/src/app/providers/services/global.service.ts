import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public imgUrl = "http://medical.marwaradwan.org/storage/app/public/"
  constructor(private _http:HttpClient) { }

  getAllRoles():Observable<any>{
    return this._http.get('http://medical.marwaradwan.org/api/auth/loadRoles/1')
  }
}
