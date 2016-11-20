import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { RegisterPage } from '../register/register';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }

  register() {
    console.log('test');
    this.navCtrl.push(RegisterPage);
  }
  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

}
