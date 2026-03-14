import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url='https://reqres.in/api';
  constructor(private http: HttpClient){}

  islogin(data:{}):Observable<any>{
   return this.http.post(this.url+'/login',data)
  }
}
