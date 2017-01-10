import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'country-list.html',
})

export class CountryListPage {
  countries: any;
  loader: any;
  country: any;
  searchTerm: string = '';

  constructor(public params: NavParams,
    public viewCtrl: ViewController,
    private http: Http,
    private navParams: NavParams,
    private loadingCtrl: LoadingController) {

    this.loadCountries().subscribe(data => {
      console.log(data);
      this.countries = data;
      this.country = data[0];
    })
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

  save(name): void {
    console.log(name);
    this.viewCtrl.dismiss(name);
  }


  loadCountries(): Observable<string> {
    return this.http
      .get('https://restcountries.eu/rest/v1/all')
        .map(res => res.json())
        .catch((error: any) => Observable.throw(error));
  }

   getItems(ev) {
    // Reset items back to all of the items
    this.loadCountries();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
if (val && val.trim() != '') {
      this.countries = this.countries.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
