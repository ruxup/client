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

@Injectable()
export class ProfileService {
  token: string;

  constructor(public http: Http, private authService: AuthService) {
     this.token = authService.getToken();
     console.log("token: " + this.token);
     console.log("id: " + authService.getUserID());

  }

  load(): Observable<User> {
    let headers = new Headers();
    headers.append('Token', this.token);

    let options = new RequestOptions({headers: headers});

    return this.http.get('https://ruxup.herokuapp.com/backend/public/index.php/api/profile', options)
      .map(res => <User>res.json());
  }

  edit(): Observable<string> {
    let headers = new Headers();
    headers.append('Token', this.token);

    let options = new RequestOptions({headers: headers});

    return this.http.get('https://ruxup.herokuapp.com/backend/public/index.php/api/profile', options)
      .map(res => <string>res.json());
  }

  
  getUserID(): Observable<number> {
    let headers = new Headers();
    headers.append('Token', this.token);

    let options = new RequestOptions({headers: headers});

    return this.http.get('https://ruxup.herokuapp.com/backend/public/index.php/api/profile', options)
      .map(res => {
          return (res.json()['id']);
        })
        .catch((error: any) => Observable.throw(error));
  }

  loadMyEvent(id): Observable<string> {
    //https://ruxup.herokuapp.com/backend/public/index.php/api/getEventsOwner/54
    let headers = new Headers();
      headers.append('Token', this.token);
  
      let options = new RequestOptions({headers: headers});
      let url = "https://ruxup.herokuapp.com/backend/public/index.php/api/getEventsOwner/" + id;
      return this.http.get(url, options)
        .map(res => <string>res.json());
  }

  update(user): Observable<string> {
    let headers = new Headers();
      headers.append('Token', this.token);
      
    let body = JSON.stringify({
      name: user.name,
      email: user.email,
      nationality: user.nationality,
      bio: user.bio,
      city: user.city,
      phone: user.phone
    });

      let options = new RequestOptions({headers: headers});
      let url = "https://ruxup.herokuapp.com/backend/public/index.php/api/profile/" + user.id;
      return this.http.put(url, body, options)
        .map(res => <string>res.json());
  }

}
