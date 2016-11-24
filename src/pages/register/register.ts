import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators} from '@angular/forms';


/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  name email pass repass
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public registrationForm: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public _forms:FormBuilder) {
    this.menuCtrl.swipeEnable(false);
    this.registrationForm = this._forms.group({
      "name":["",Validators.minLength(4)],
      "email":["",Validators.required],
      "password":["", Validators.required]
    })

  }

  goBack() {
    this.navCtrl.pop();
  }

  register() {
    console.log('register');
  }

  ionViewDidLoad() {
    console.log('<--- Register Page --->');
  }

}
