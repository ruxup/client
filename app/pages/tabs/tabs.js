import {Page} from 'ionic-angular';
import {tab1Root} from '../tabone/tabone';
import {tab2Root} from '../tabtwo/tabtwo';
import {tab3Root} from '../tabthree/tabthree';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    this.tab1Root = tab1Root;
    this.tab2Root = tab2Root;
    this.tab3Root = tab3Root;
  }
}