import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, MenuController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {
  user:any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private formBuilder: FormBuilder, private authService: AuthService) {
    this.menuCtrl.swipeEnable(false);
    this.user = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('<--- Login Page --->');
  }

  login() {
    console.log('login');
    console.log(this.user.value);
    this.authService.login(this.user.value);
    //this.navCtrl.setRoot(HomePage);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
