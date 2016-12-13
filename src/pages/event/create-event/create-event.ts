import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { EventService } from '../../../providers/event-service';

@Component({
  templateUrl: 'create-event.html',
  providers: [EventService]
})
export class CreateEventPage  {
 
  constructor(public params: NavParams,
              public viewCtrl: ViewController,
              public eventService: EventService) {
    this.eventService.create()
      .subscribe(
        data => {
          console.log(data);
        }, err => {
          console.log(err._body);
        }
      );
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
