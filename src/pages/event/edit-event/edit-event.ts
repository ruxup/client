import { Component } from '@angular/core';
import { NavParams, ViewController, ModalController } from 'ionic-angular';
import { Validators } from '@angular/forms';

import { AuthService } from '../../../providers/auth-service';

import { LoadingController } from 'ionic-angular';
import { CountryListPage } from '../create-event/country-list/country-list';

@Component({
  templateUrl: 'edit-event.html',
  providers: []
})

export class EditEventPage {
  eventDetail: any;
  loader: any;
  transferDate: string;
  startDate: String;
  endDate: String;
  categories: any;
  Anotherdate: any;

  locations: any;
  constructor(public params: NavParams,
              public viewCtrl: ViewController,
              private authService: AuthService,
              private navParams: NavParams,
              private loadingCtrl: LoadingController,
              public modalCtrl: ModalController
             ) {    
    console.log(this.navParams.get('details'));
    this.eventDetail = this.navParams.get('details');
    this.eventDetail.start_time = this.navParams.get('details').start_time;
    this.startDate = new Date().toISOString();
    this.endDate = new Date(Date.now() + 86400000).toISOString();
   
  }

  ionViewLoaded() {
  }


  dismiss() {
    this.viewCtrl.dismiss(this.eventDetail);
  }

  save() {
    this.presentLoading();

    // this.profileService.update(this.userDetail)
    //   .subscribe(data => {
    //     console.log(data);
    //         this.viewCtrl.dismiss();

    //   });
    this.viewCtrl.dismiss(this.eventDetail);

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Saving...",
      duration: 1000
    });
    this.loader.present();
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
     this.eventDetail.location = data;
   });
       modal.present();

  }

  setDate(date) {
    this.Anotherdate = date;
    return this.Anotherdate;
  }


  
}
