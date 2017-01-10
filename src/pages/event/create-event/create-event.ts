import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Validators } from '@angular/forms';

import { AuthService } from '../../../providers/auth-service';
import { EventService } from '../../../providers/event-service';

import { CountryListPage } from './country-list/country-list';

import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'create-event.html',
  providers: [EventService]
})

export class CreateEventPage {
  event: any;
  transferDate: string;
  startDate: String;
  endDate: String;
  categories: any;
  locations: any;
  loader: any;

  constructor(public params: NavParams,
              public navCtrl: NavController,
              public viewCtrl: ViewController,
              private authService: AuthService,
              private eventService: EventService,
              private navParams: NavParams,
              private loadingCtrl: LoadingController,
              public modalCtrl: ModalController) {    
    this.startDate = new Date().toISOString();
    this.endDate = new Date(Date.now() + 86400000).toISOString();
    this.event = {
      name: '',
      category: '',
      location: '',
      start: '',
      end: '',
    };

    this.event.location = 'None';

  }

  ionViewLoaded() {
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

  create(): void {

    console.log(this.authService.getUserID());
    this.event.start = this.formatDate(this.startDate);
    this.event.end = this.formatDate(this.endDate);
    this.event.owner_id = this.navParams.get("owner_id");

    console.log(this.event);

    this.eventService.create(this.authService.getToken(), this.event)
      .subscribe(
      data => {
        console.log(data);
      }, err => {
        console.log(err._body);
        this.dismiss();
      }
      );
  }

  formatDate(d: String): String {
    if (d != null) {
        d = d.replace("T", ' ');
        d = d.replace("Z", '');
        return d.replace(/\.[0-9]{3}/, '');
    }
  }

   openCountry(): void {
     console.log('open country');
    let modal = this.modalCtrl.create(CountryListPage);
    modal.onDidDismiss(data => {
     console.log(data);
     this.event.location = data;
   });
       modal.present();

  }
}
