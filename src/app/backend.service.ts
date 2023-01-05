import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  httpUserUrl:string='http://localhost:12345/users'
  httpProductUrl:string='http://localhost:12345/products'

  getUserData=()=>{
    return this.http.get(this.httpUserUrl)
  }

  getUserById=(eid:number)=>{
    return this.http.get(`http://localhost:12345/users/${eid}`)
  }


  constructor(private http:HttpClient) { }
}
