import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  constructor(private _http:HttpClient) { }
  //https://jsonplaceholder.typicode.com/photos?_limit=12
  getPhotos():Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/photos?_limit=12')
  }
}
