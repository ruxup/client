import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service';

import { LoginPage } from '../login/login';
import { FindEventPage } from '../event/find-event/find-event';
import { CreateEventPage } from '../event/create-event/create-event';


enum Fruit {
	Apple, Orange, Melon, Banana, Pear,
}


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
 
default: string = '1 1-2 1-2-2';
	simpleColumns: any[];
	independentColumns: any[];
	cityPickerOption: any[];
	datetime;
  constructor(public navCtrl: NavController, 
              public menuCtrl: MenuController, 
              public storage: Storage,
              public authService: AuthService,
              public modalCtrl: ModalController) {
    this.menuCtrl.swipeEnable(true);
    console.log(authService.getToken());
    this.simpleColumns = [
			{
				name: 'col1',
				options: [{ text: '1', value: '1' },
					{ text: '2', value: '2' },
					{ text: '3', value: '3' }]
			},
			{
				name: 'col2',
				options: [{ text: '1-1', value: '1-1' },
					{ text: '1-2', value: '1-2' },
					{ text: '2-1', value: '2-1' },
					{ text: '2-2', value: '2-2' },
					{ text: '3-1', value: '3-1' },]
			},
			{
				name: 'col3',
				options: [{ text: '1-1-1', value: '1-1-1' },
					{ text: '1-1-2', value: '1-1-2' },
					{ text: '1-2-1', value: '1-2-1' },
					{ text: '1-2-2', value: '1-2-2' },
					{ text: '2-1-1', value: '2-1-1' },
					{ text: '2-1-2', value: '2-1-2' },
					{ text: '2-2-1', value: '2-2-1' },
					{ text: '2-2-2', value: '2-2-2' },
					{ text: '3-1-1', value: '3-1-1' },
					{ text: '3-1-2', value: '3-1-2' },]
			}
		];
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
