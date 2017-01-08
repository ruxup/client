import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  tabs: any;
  events: any;

  constructor(public navCtrl: NavController, private profileService: ProfileService) {
    this.tabs = "bio";
  }

  ngOnInit() {
    this.profileService.load()
      .subscribe(data => {
        this.user = data['user'];
        this.user.profile_pic = 'https://api.adorable.io/avatars/120/default';
        this.user.cover_pic = "https://images.unsplash.com/photo-1481204287293-36160be24f29";
        this.user.bio = "Travel writer by profession and lover of world cultures, languages, souls, food, oceans, wild spaces and urban places by nature.";
        this.user.city = "Eindhoven";
        this.user.nationality = "Dutch";
        this.user.phone = "1-800-Hotline-Bling";

        console.log(this.user);

        this.profileService.loadMyEvent(this.user.id)
        .subscribe(data => {
          console.log(data);
          this.events = data;
        });
      });
  }
  ionViewDidLoad() {
  }

  loadPicture(category): string {
    let imgUrl = 'assets/img/category/' + category + '.jpg';
    console.log(category);
    return imgUrl;
  }

}
