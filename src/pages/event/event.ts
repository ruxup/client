import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EventService } from '../../providers/event-service';
/*
  Generated class for the Event page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
  providers: [EventService]
})
export class EventPage {
 tabs: any;
 events: any;
 singleEvent: any;
 members: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventService) {
    this.tabs = "member";
    console.log(this.navParams.get('eventId'));
    this.events = this.navParams.get('events');
    this.singleEvent = this.getEvent(this.navParams.get('eventId'));
    console.log(this.singleEvent);
}
  

  ionViewDidLoad() {
    console.log('Hello EventPage Page');
  }

  ngOnInit() {
    // this.eventService.loadEvent(this.navParams.get('eventId'))
    //   .subscribe(data => {
    //     console.log(data);
    //     this.singleEvent = data;
    //   })
  }

  getEvent(id) {
    return this.events.find(x => x.id === id);
  }

  loadMember(id) {
    this.eventService.loadMember(this.navParams.get('eventId'))
        .subscribe(data => {
          console.log(data);
          this.members = data;
        });
  }
  loadPicture(category): string {
    let imgUrl = 'assets/img/category/' + category + '.jpg';
    return imgUrl;
  }

}
