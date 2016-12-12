import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

import { AuthService } from './auth-service';

/*
  Generated class for the ProfileService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
let user = {};

@Injectable()
export class ProfileService {
  
  user = {
      name: "armin",
      lastname: "roshan",
      dateOfBirth: "may/24/1990",
      email: 'aaaaa@bbb.com',
      description: "description come here! description come here! description come here!",
      image:""
    };

  token: string;

  constructor(public http: Http, private authService: AuthService) {
     this.token = authService.getToken();
  }

  load(): Observable<User> {
    let headers = new Headers();
    headers.append('Token', this.token);

    let options = new RequestOptions({headers: headers});

    return this.http.get('https://ruxup.herokuapp.com/backend/public/index.php/api/profile', options)
      .map(res => <User>res.json());
  }

}
