import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AuthService]
})
export class RegisterPage {
  user:any;

  constructor(public navCtrl: NavController, 
              public menuCtrl: MenuController,
              public formBuilder: FormBuilder,
              public authService: AuthService) {
    this.menuCtrl.swipeEnable(false);
    this.user = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      'email': ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      'password': ['', Validators.compose([Validators.minLength(6), Validators.required])],
      'confirm_password': ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

  register() {
    this.authService.register(this.user.value)
      .subscribe(
        data => {
          console.log(data);

          // login
          this.authService.login(this.user.value)
            .subscribe(
              data => { 
                this.navCtrl.setRoot(HomePage);
              }
              ,err => {
                console.log(err._body);
              }
            );
            
        }, err => {
          console.log(err._body);
        }
      );
  }

  ionViewDidLoad() {
  }


}
