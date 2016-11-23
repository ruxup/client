import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
let currentUser = {};

@Injectable()
export class AuthService {
  

  constructor(public http: Http, public navCtrl: NavController) {
    console.log('Hello AuthService Provider');
    
  }
  
  logout() {
    console.log("logout");
  }

  login(user) {
    currentUser = new User(user.email, user.password);
    console.log(currentUser)
  }
 

}
