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


  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

}
