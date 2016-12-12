import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { User } from '../../models/user';

import { ProfileService } from '../../providers/profile-service';

/*
 Generated class for the Profile page.
 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [ProfileService]
})
export class ProfilePage {
  user: User;

  constructor(public navCtrl: NavController, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.load()
      .subscribe(data => {
        this.user = data['user'];
        this.user.profile_pic = 'https://api.adorable.io/avatars/120/default';
        this.user.cover_pic = "https://images.unsplash.com/photo-1481204287293-36160be24f29";
        console.log(this.user);
      });

  }
  ionViewDidLoad() {
  }

}
