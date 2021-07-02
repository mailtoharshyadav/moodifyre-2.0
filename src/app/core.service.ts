import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CoreService {
  private regUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }
  login(data: any){
    console.log('service');
    return this.http.post<any>(`${this.regUrl}login`, data);
  }
  signup(user: any){
    console.log(user);
    return this.http.post<any>(`${this.regUrl}signup`, user);
  }
}
