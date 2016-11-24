import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the Profile page.
 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
<<<<<<< HEAD
  user: any;


  constructor(public navCtrl: NavController) {
    this.user = {
      name: "armin",
      lastname: "roshan",
      dateOfBirth: "may/24/1990",
      email: 'aaaaa@bbb.com',
      description: "description come here! description come here! description come here!",
      image:""
    };
  }
=======

  constructor(public navCtrl: NavController) {}
>>>>>>> parent of bc7f39a... Finished login implementation

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

}
