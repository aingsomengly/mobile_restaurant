import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AsiansdetailPage } from './../asians/asiansdetail/asiansdetail';

import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-asians',
  templateUrl: 'asians.html'
})
export class AsiansPage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  asiansdetailPage = AsiansdetailPage;
  
  constructor(public navCtrl: NavController, platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AsiansPage');
  }

}
