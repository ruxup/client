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
  providers: [AuthService]
})
export class HomePage {

  movies: Array<any>;

  constructor(public navCtrl: NavController, 
              public menuCtrl: MenuController, 
              public storage: Storage,
              public authService: AuthService) {
    this.menuCtrl.swipeEnable(true);
  }

  ionViewDidLoad() {
        
     this.storage.get('token').then((val) => {
       console.log('Token: ', val);
     })
  }

  logout() {
    console.log('logout');
    this.navCtrl.setRoot(LoginPage);
  }

}
