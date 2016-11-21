import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

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

  ionViewDidLoad() {
    console.log('<--- Login Page --->');
  }

  login() {
    console.log('login');
    this.navCtrl.setRoot(HomePage);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
