import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service';

import { LoginPage } from '../login/login';
import { FindEventPage } from '../event/find-event/find-event';
import { CreateEventPage } from '../event/create-event/create-event';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [],
})
export class HomePage {
 
  constructor(public navCtrl: NavController, 
              public menuCtrl: MenuController, 
              public storage: Storage,
              public authService: AuthService,
              public modalCtrl: ModalController) {
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

  openFindEvents() {
    let modal = this.modalCtrl.create(FindEventPage);
    modal.present();
  }

  openCreateEvents() {
    let modal = this.modalCtrl.create(CreateEventPage);
    modal.present();
  }

}
