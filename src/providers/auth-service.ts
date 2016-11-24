import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

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


  constructor(public apiService: ApiService, public http: Http, public navCtrl: NavController) {
    console.log('Hello AuthService Provider');

  }

  login(user) {
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

    this.http
<<<<<<< HEAD

=======
>>>>>>> parent of bc7f39a... Finished login implementation
      .post('/api/login', body, options)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
<<<<<<< HEAD
        },
=======
        }, 
>>>>>>> parent of bc7f39a... Finished login implementation
        err => {
          console.log('ERROR!: ', err);
        }
      )
}

  logout() {
    console.log("logout");
  }


}
