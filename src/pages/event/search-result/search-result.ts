import { Component } from '@angular/core';
import { NavParams, ViewController, NavController } from 'ionic-angular';
import { Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { EventPage } from '../../event/event';


import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'search-result.html',
})

export class SearchResultPage {
  countries: any;
  loader: any;
  country: any;
  searchTerm: string = '';
  results: any;

  constructor(public params: NavParams,
    public viewCtrl: ViewController,
    private http: Http,
    private navParams: NavParams,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController) {
    this.loadSearch();
  }

  ionViewLoaded() {
  }

  loadSearch() {
    
    this.results = [
  {
    "id": 64,
    "name": "Coldplay Live Concert",
    "location": "Berlin, Germany",
    "start_time": "2017-01-06 23:07:31",
    "end_time": "2017-01-07 23:07:31",
    "description": "The biggest tour of coldpay that you can miss!",
    "image": null,
    "category": "Party",
    "owner_id": 54
  },


  {
    "id": 114,
    "name": "LA LA LA Party!",
    "location": "Lisbon, Portugal",
    "start_time": "2017-01-07 12:44:06",
    "end_time": "2017-01-09 12:44:06",
    "description": "Whole night of partying with famous DJ all over the world!!!",
    "image": null,
    "category": "Party",
    "owner_id": 54
  },

  {
    "id": 184,
    "name": "TomorrowLand",
    "location": "Angola",
    "start_time": "2017-01-10 19:16:52",
    "end_time": "2017-01-11 19:16:52",
    "description": "The best party ever",
    "image": null,
    "category": "Party",
    "owner_id": 54
  },
 {
    "id": 154,
    "name": "Ruxup Demo",
    "location": "Netherlands",
    "start_time": "2017-01-11",
    "end_time": "2017-01-11",
    "description": "The final demo presentation for proep project",
    "image": null,
    "category": "Party",
    "owner_id": 54
  }
]
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

  save(name): void {
    console.log(name);
    this.viewCtrl.dismiss(name);
  }


   openEvent(id): void {
    console.log('event opened: ' + id);
    this.navCtrl.push(EventPage, {eventId: id});
  }

   getItems(ev) {
    // Reset items back to all of the items
    this.loadSearch();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
if (val && val.trim() != '') {
      this.results = this.results.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

   loadPicture(category): string {
    let imgUrl = 'assets/img/category/' + category + '.jpg';
    return imgUrl;
  }
}
