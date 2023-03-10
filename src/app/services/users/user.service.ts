import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser } from 'src/app/models/AppUsers';
import { AppConfig } from 'src/app/config/AppConfig';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private contentHeaders = new HttpHeaders();
  private httpUrl: string = AppConfig.apiUrl;
  private userSubject: BehaviorSubject<AppUser | null>;
  public user: Observable<AppUser | null>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
    this.contentHeaders.append('Accept', 'application/json');
    this.contentHeaders.append('Content-Type', 'application/json');
  }

  findByUserName = (userName: string) => {
    return this.http.get(`${this.httpUrl}/users?userName=${userName}`);
  };

  register = (appUser: AppUser) => {
    console.log(appUser);
    return this.http.post(`${this.httpUrl}/users`, appUser);
  };

  login = (appUser: AppUser) => {
    console.log(appUser);
    return this.http.get(`${this.httpUrl}/users?userName=${appUser.userName}&password=${appUser.password}`);
  };

}
