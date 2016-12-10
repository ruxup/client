import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service';

import { LoginPage } from '../login/login';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: []
})
export class HomePage {
 
  constructor(public navCtrl: NavController, 
              public menuCtrl: MenuController, 
              public storage: Storage,
              public authService: AuthService) {
    this.menuCtrl.swipeEnable(true);
    console.log(authService.getToken());
  }

  ionViewDidLoad() {
    
  }

  logout() {
    this.authService.logout()
      .subscribe(
        data => { 
         console.log(data);
        }
        ,err => {
          console.log(err);
          this.storage.clear();
          this.navCtrl.setRoot(LoginPage);
        });
  }

}
