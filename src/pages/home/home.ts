import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(true);
  }

  ionViewDidLoad() {
    console.log('<--- Home Page --->');
  }

  logout() {
    console.log('logout');
    this.navCtrl.popToRoot();
  }

}
