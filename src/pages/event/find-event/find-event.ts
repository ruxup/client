import { Component } from '@angular/core';
import { NavParams, NavController, ViewController, ModalController } from 'ionic-angular';

import { CountryListPage } from '../create-event/country-list/country-list';
import { LoadingController } from 'ionic-angular';

import { SearchResultPage } from '../search-result/search-result';
@Component({
  templateUrl: 'find-event.html',
})
export class FindEventPage {
  choice: any;
  category: any;
  location: any;
  loader: any;
startDate: String;
  isCategory = false;
  isLocation = false;
  constructor(public params: NavParams,
              public viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              public modalCtrl: ModalController,
              public navCtrl: NavController) {
    this.choice = "None";
    this.location = "None";
    this.category = "None";
     this.startDate = new Date().toISOString();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  updateChecker() {
    this.isCategory = false;
    this.isLocation = false;
    if (this.choice == 'Location') {
      this.isLocation = true;
    }
    if (this.choice == 'Category') {
      this.isCategory = true;
    }
  }

  openCountry(): void {
    console.log('open country');
    let modal = this.modalCtrl.create(CountryListPage);
    modal.onDidDismiss(data => {
      console.log(data);
      this.location = data;
    });
    modal.present();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

  search() {
    this.presentLoading();
    this.navCtrl.push(SearchResultPage);
  }

  
}
