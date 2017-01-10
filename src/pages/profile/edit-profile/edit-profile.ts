import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Validators } from '@angular/forms';

import { AuthService } from '../../../providers/auth-service';
import { ProfileService } from '../../../providers/profile-service';

import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'edit-profile.html',
  providers: [ProfileService]
})

export class EditProfilePage {
  userDetail: any;
  loader: any;

  constructor(public params: NavParams,
              public viewCtrl: ViewController,
              private authService: AuthService,
              private navParams: NavParams,
              private loadingCtrl: LoadingController,
              public profileService: ProfileService) {    
    this.userDetail = this.navParams.get('details');
  }

  ionViewLoaded() {
  }


  dismiss() {
    this.viewCtrl.dismiss(this.userDetail);
  }

  save() {
    this.presentLoading();

    // this.profileService.update(this.userDetail)
    //   .subscribe(data => {
    //     console.log(data);
    //         this.viewCtrl.dismiss();

    //   });
    this.viewCtrl.dismiss(this.userDetail);

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Saving...",
      duration: 1000
    });
    this.loader.present();
  }

  
}
