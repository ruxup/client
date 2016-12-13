import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'find-event.html',
})
export class FindEventPage  {
 
  constructor(public params: NavParams,
              public viewCtrl: ViewController) {
    
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
