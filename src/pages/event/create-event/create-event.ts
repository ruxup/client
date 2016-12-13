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

  constructor(public params: NavParams,
              public viewCtrl: ViewController,
              public eventService: EventService,
              public formBuilder: FormBuilder,) {
    this.background_image = 'assets/img/create-event-big.jpg';

    this.event = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirm_password': ['', Validators.required]
    });
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
}
