import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AsiansgdetailPage } from './../asiansg/asiansgdetail/asiansgdetail';

/**
 * Generated class for the AsiansgPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-asiansg',
  templateUrl: 'asiansg.html',
})
export class AsiansgPage {
  asiansgdetailPage = AsiansgdetailPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsiansgPage');
  }

}
