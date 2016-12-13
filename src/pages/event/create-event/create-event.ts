import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'create-event.html',
})
export class CreateEventPage  {
 
  constructor(public params: NavParams,
              public viewCtrl: ViewController) {
    
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
