import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
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
    public email: string,
    public password: string) { }
}

let currentUser = {};

@Injectable()
export class AuthService {
  public token: string;

  constructor(public apiService: ApiService, public http: Http, public navCtrl: NavController, public storage: Storage) {

  }

  login(user): Observable<string> {
    currentUser = new User(user.email, user.password);
    console.log(currentUser)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  
    let body = JSON.stringify({
      email: user.email,
      password: user.password
    });

    console.log(body);

    let options = new RequestOptions({headers: headers});

    return this.http
      // .post('/api/login', body, options)
      .post('https://ruxup.herokuapp.com/backend/public/index.php/api/login', body, options)
        .map(res => res.json())
        .catch((error: any) => Observable.throw(error));
}

  logout() {
    console.log("logout");
    this.storage.clear();
  }


}
