import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

import { ProfileService } from '../../providers/profile-service';
import { EventPage } from '../event/event';
import { EditProfilePage } from './edit-profile/edit-profile';

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

  constructor(public navCtrl: NavController, 
              private profileService: ProfileService,
              public modalCtrl: ModalController) {
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
              this.events = [
  {
    "id": 34,
    "name": "China Great Wall Trip",
    "location": "Huairou, China",
    "start_time": "2016-12-13 21:30:45",
    "end_time": "2016-12-14 21:30:45",
    "description": "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the",
    "image": null,
    "category": "Travel",
    "owner_id": 54
  },
  {
    "id": 44,
    "name": "Real Madrid Match ",
    "location": "Madrid, Spain",
    "start_time": "2016-12-13 21:30:45",
    "end_time": "2016-12-14 21:30:45",
    "description": "Watching the greatest football match ever",
    "image": null,
    "category": "Sport",
    "owner_id": 54
  },
  {
    "id": 54,
    "name": "Japanese Sushi Tasting",
    "location": "Tokyo, Japan",
    "start_time": "2017-01-06 23:04:05",
    "end_time": "2017-01-07 23:04:05",
    "description": "Taste the freshest and tastiest sushi ever made in japan",
    "image": null,
    "category": "Food",
    "owner_id": 54
  },
  {
    "id": 64,
    "name": "Coldplay Live Concert",
    "location": "Berlin, Germany",
    "start_time": "2017-01-06 23:07:31",
    "end_time": "2017-01-07 23:07:31",
    "description": "The biggest tour of coldpay that you can miss!",
    "image": null,
    "category": "Music",
    "owner_id": 54
  },
  {
    "id": 74,
    "name": "LA LA LA Party!",
    "location": "Lisbon, Portugal",
    "start_time": "2017-01-06 23:51:25",
    "end_time": "2017-01-07 23:51:25",
    "description": "Whole night of partying with famous DJ all over the world!!!",
    "image": null,
    "category": "Party",
    "owner_id": 54
  }
]
        });
      });
  }
  ionViewDidLoad() {
  }

  loadPicture(category): string {
    let imgUrl = 'assets/img/category/' + category + '.jpg';
    return imgUrl;
  }

  openEvent(id): void {
    console.log('event opened: ' + id);
    this.navCtrl.push(EventPage, {eventId: id, events: this.events});
  }

  editProfile() {
    console.log('clicke');
    let modal = this.modalCtrl.create(EditProfilePage, {"owner_id": this.user.id, details: this.user});
    modal.onDidDismiss(data => {
     console.log(data);
     this.user = data;
   });
    modal.present();
  }

}
