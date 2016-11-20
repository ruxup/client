import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/tabone/tabone.html',
})
export class tab1Root {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
