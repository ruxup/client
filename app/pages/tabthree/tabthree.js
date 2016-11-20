import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the TabthreePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/tabthree/tabthree.html',
})
export class tab3Root {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
