import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
import { ApiService } from './api-service';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string) { }
}

@Injectable()
export class AuthService {
  token: string;
  id: number;

  constructor(public apiService: ApiService, public http: Http, public storage: Storage) {

  }

  setToken(t: string) {
    this.token = t;
  }
  
  getToken(): string {
    return this.token;
  }

  setUserID(i: number): void {
    this.id = i;
  }

  getUserID() {
    return this.id;
  }

  login(user): Observable<string> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  
    let body = JSON.stringify({
      email: user.email,
      password: user.password
    });

    console.log(body);

    let options = new RequestOptions({headers: headers});

    return this.http
      .post('https://ruxup.herokuapp.com/backend/public/index.php/api/login', body, options)
        .map(res => {
          this.setToken(res.json()['token']); 
          return res.json()
        })
        .catch((error: any) => Observable.throw(error));
}

  logout(): Observable<string> {

    let headers = new Headers();
    headers.append('Token', this.token);

    let options = new RequestOptions({headers: headers});

    return this.http
      .get('https://ruxup.herokuapp.com/backend/public/index.php/api/logout', options)
        .map(res => res.json())
        .catch((error: any) => Observable.throw(error));
  }

  register(user): Observable<string> {
    var currentUser = new User(user.name, user.email, user.password);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  
    let body = JSON.stringify({
      name: currentUser.name,
      email: currentUser.email,
      password: currentUser.password
    });

    console.log(body);

    let options = new RequestOptions({headers: headers});

    return this.http
      .post('https://ruxup.herokuapp.com/backend/public/index.php/api/register', body, options)
        .map(res => res.json())
        .catch((error: any) => Observable.throw(error));
  }


}
