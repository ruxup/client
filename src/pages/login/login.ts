import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, MenuController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  providers: []
})
export class LoginPage {
  user:any;

  constructor(public storage: Storage, 
              public navCtrl: NavController, 
              public menuCtrl: MenuController, 
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder, 
              public authService: AuthService) {
    this.menuCtrl.swipeEnable(false);
    this.user = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

  }

  ionViewDidLoad() {
  }

  login() {
    this.authService.login(this.user.value)
      .subscribe(
        data => { 
          this.navCtrl.setRoot(HomePage);
        }
        ,err => {
          console.log(err._body);
          this.presentToast(err._body);
          this.storage.clear();
        });

      
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }
}
