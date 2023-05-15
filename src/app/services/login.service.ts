import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(creds:Credentials){
    return this.http.post('https://portfolio-backend-6wd4.onrender.com/login', creds, {
      observe: 'response'
    }).pipe(map((response:HttpResponse<any>)=>{
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization');
      const token = bearerToken.replace('Bearer ', '');

      localStorage.setItem('token', token);

      return body;
    }))
  }

}
