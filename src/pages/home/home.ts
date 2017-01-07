import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service';
import { ProfileService } from '../../providers/profile-service';

import { LoginPage } from '../login/login';
import { FindEventPage } from '../event/find-event/find-event';
import { CreateEventPage } from '../event/create-event/create-event';
import { User } from '../../models/user';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProfileService],
})
export class HomePage {
  user: User;
   mySlideOptions = {
    initialSlide: 1,
    loop: true,
    pager:true
   };

  constructor(public navCtrl: NavController, 
              public menuCtrl: MenuController, 
              public storage: Storage,
              private authService: AuthService,
              public modalCtrl: ModalController,
              private profileService: ProfileService) {
    this.menuCtrl.swipeEnable(true);
  }

  ionViewDidLoad() {

  }

  ngOnInit() {
    this.profileService.load()
      .subscribe(data => {
        this.user = data['user'];
        this.user.profile_pic = 'https://api.adorable.io/avatars/120/default';
        this.user.cover_pic = "https://images.unsplash.com/photo-1481204287293-36160be24f29";
        this.authService.setUserID(data['user'].id);
      });

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
    console.log(this.authService.getUserID());
    let modal = this.modalCtrl.create(CreateEventPage, {"owner_id": this.user.id});
    modal.present();
  }

}
