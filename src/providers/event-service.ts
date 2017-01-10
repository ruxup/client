import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthService } from './auth-service';
import { User } from '../models/user';

@Injectable()
export class EventService {
token: string;

  constructor(public http: Http, private authService: AuthService) {
     this.token = authService.getToken();
  }

    create(token, event): Observable<string> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Token', token);

        // let body = JSON.stringify({
        //     name: 'Event test1',
        //     location: 'Eindhoven',
        //     start_time: '2016-12-13 21:30:45',
        //     end_time: '2016-12-14 21:30:45',
        //     category: 'Fun',
        //     owner_id: '54'
        // });

        let body = JSON.stringify({
            name: event.name,
            location: event.location,
            start_time: event.start,
            end_time: event.end,
            category: event.category,
            owner_id: event.owner_id,
            description : event.description,
        });

        console.log(body);

        let options = new RequestOptions({ headers: headers });

        return this.http
            .post('https://ruxup.herokuapp.com/backend/public/index.php/api/create_event', body, options)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error));
    }

    load(): Observable<User> {
    let headers = new Headers();
    headers.append('Token', this.token);

    let options = new RequestOptions({headers: headers});

    return this.http.get('https://ruxup.herokuapp.com/backend/public/index.php/api/profile', options)
      .map(res => <User>res.json());
  }

  loadEvent(id): Observable<string> {
    //https://ruxup.herokuapp.com/backend/public/index.php/api/getEventsOwner/54
    let headers = new Headers();
      headers.append('Token', this.token);
  
      let options = new RequestOptions({headers: headers});
      let url = "https://ruxup.herokuapp.com/backend/public/index.php/api/getEvents/" + id;
      return this.http.get(url, options)
        .map(res => <string>res.json());
  }

  loadMember(id): Observable<string> {
      let headers = new Headers();
      headers.append('Token', this.token);
  
      let options = new RequestOptions({headers: headers});
      let url = "https://ruxup.herokuapp.com/backend/public/index.php/api/getUsers/" + id;
      return this.http.get(url, options)
        .map(res => <string>res.json());
  }

}
