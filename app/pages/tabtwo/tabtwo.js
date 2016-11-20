import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/tabtwo/tabtwo.html',
})
export class tab2Root {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
