import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Event } from '../models/event';

import { AuthService } from './auth-service';
import { ProfileService } from './profile-service';

@Injectable()
export class EventService {
    token: string;
    userID: string;

    constructor(public http: Http, public authService: AuthService, public profileService: ProfileService) {
        this.token = authService.getToken();
    }

    create(event): Observable<string> {
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        // let body = JSON.stringify({
        //     name: 'Event test1',
        //     location: 'Eindhoven',
        //     start_time: '2016-12-13 21:30:45',
        //     end_time: '2016-12-14 21:30:45',
        //     category: 'Fun',
        //     owner_id: '54'
        // });

        // load owner id
        this.profileService.getUserID()
            .subscribe(
                data => {
                    console.log(data);
                    this.userID = data;
                    console.log(data);
                }, err => {
                    console.log(err._body);
                }
            );

        let body = JSON.stringify({
            name: event.name,
            location: event.location,
            start_time: event.start,
            end_time: event.end,
            category: event.category,
            owner_id: this.userID
        });

        console.log(body);

        let options = new RequestOptions({ headers: headers });

        return this.http
            .post('https://ruxup.herokuapp.com/backend/public/index.php/api/create_event', body, options)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error));
    }
   
}
