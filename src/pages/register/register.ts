import { Component } from '@angular/core';
import { NavController, MenuController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { LoadingController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
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
  user: any;
 loader: any;
  constructor(public navCtrl: NavController, 
              public menuCtrl: MenuController,
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder,
              public authService: AuthService,
              private loadingCtrl: LoadingController) {
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
   this.presentToast('Successfully Registered!');
   this.presentLoading();
    // this.authService.register(this.user.value)
    //   .subscribe(
    //     data => {
    //       this.loader.dismiss();
          
    //       console.log(data);
    //       this.presentToast('Successfully Registered!');
    //     }
    //   );

    setTimeout(() => {
      this.loader.dismiss();
        this.navCtrl.setRoot(LoginPage);
    }, 3050);

  }

  ionViewDidLoad() {
  }
presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
