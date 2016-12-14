import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

import { EventService } from '../../../providers/event-service';

@Component({
  templateUrl: 'create-event.html',
  providers: [EventService]
})

export class CreateEventPage {
  background_image: string;
  event: any;
  transferDate: string;
  myDate: String = new Date().toISOString();

  constructor(public params: NavParams,
    public viewCtrl: ViewController,
    public eventService: EventService,
    public formBuilder: FormBuilder, ) {
    this.background_image = 'assets/img/create-event-big.jpg';
    this.myDate = new Date().toISOString();
    this.event = this.formBuilder.group({
      'name': ['', Validators.required],
      // 'email': ['', Validators.required],
      // 'password': ['', Validators.required],
      // 'confirm_password': ['', Validators.required]
    });
  }

  ionViewLoaded() {
    this.todayDate(this.transferDate);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create(): void {
    this.eventService.create()
      .subscribe(
      data => {
        console.log(data);
      }, err => {
        console.log(err._body);
      }
      );
  }

  todayDate(datetoDay: string): void {
    let utc = new Date().toJSON().slice(0, 10);
    if (datetoDay === undefined) {
      this.transferDate = utc;
    }
  }
}
