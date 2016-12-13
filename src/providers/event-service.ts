import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Event } from '../models/event';

import { AuthService } from './auth-service';

@Injectable()
export class EventService {
    token: string;

    constructor(public http: Http, private authService: AuthService) {
        this.token = authService.getToken();
    }

    create(): Observable<string> {
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let body = JSON.stringify({
            name: 'Event test1',
            location: 'Eindhoven',
            start_time: '2016-12-13 21:30:45',
            end_time: '2016-12-14 21:30:45',
            category: 'Fun',
            owner_id: '54'
        });

        console.log(body);

        let options = new RequestOptions({ headers: headers });

        return this.http
            .post('https://ruxup.herokuapp.com/backend/public/index.php/api/create_event', body, options)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error));
    }
   
}
