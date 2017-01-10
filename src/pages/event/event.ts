import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Ionic2Rating } from 'ionic2-rating';

import { EventService } from '../../providers/event-service';
import { EditEventPage } from './edit-event/edit-event';
import { LoadingController } from 'ionic-angular';


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
 loader: any;
 private rate = 5;
 messages: Array<string>;
 msg: string = '';
 isJoined: Boolean;
Anotherdate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventService,  private loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    this.tabs = "desc";
    //this.events = this.navParams.get('events');
    //this.singleEvent = this.getEvent(this.navParams.get('eventId'));
    this.singleEvent = {
    "id": 154,
    "name": "Ruxup Demo",
    "location": "Netherlands",
    "start_time": "2017-01-11",
    "end_time": "2017-01-11",
    "description": "The final demo presentation for proep project",
    "image": null,
    "category": "Party",
    "owner_id": 54
  };
    console.log(this.singleEvent);
    this.messages = ["Hello"];
}
  

  ionViewDidLoad() {
    console.log('Hello EventPage Page');
    this.loadMember(34);
  }

  ngOnInit() {
    // this.eventService.loadMember(this.navParams.get('eventId'))
    //     .subscribe(data => {
    //       console.log(data);
    //       this.members = data;
    //     });
  }

  getEvent(id) {
    return this.events.find(x => x.id === id);
  }

  loadMember(id) {
    
  }
  loadPicture(category): string {
    console.log(category);
    let imgUrl = 'assets/img/category/' + category + '.jpg';
    return imgUrl;
  }
  loadAvatar(name): string {
    return 'https://api.adorable.io/avatars/120/' + name + '.jpg';

  }

  editEvent() {
    let modal = this.modalCtrl.create(EditEventPage, { details: this.singleEvent});
    modal.onDidDismiss(data => {
     console.log(data);
     this.singleEvent = data;
   });
    modal.present();
  }
  setDate(date) {
    this.Anotherdate = date;
    return this.Anotherdate;
  }

  leave() {
    this.presentLoading();

              this.isJoined = !this.isJoined;

    
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..",
      duration: 1000
    });
    this.loader.present();
  }

  addMessage(msg: string): void {
    console.log(msg);
    this.messages.push(msg);
    console.log(this.messages);
    this.msg = '';
  }

}
