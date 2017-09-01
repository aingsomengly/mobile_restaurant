import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { JayadetailPage } from './../jaya/jayadetail/jayadetail';


@Component({
  selector: 'page-jaya',
  templateUrl: 'jaya.html',
})
export class JayaPage {
  jayadetailPage = JayadetailPage;
  displayData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.displayData = [
      {
        "img" : 'assets/food/1.jpg',
        "title": "My Neighbor Totoro",
        "name" : "Hayao Miyazaki • 1988"
      },
      {
        "img" : 'assets/food/1.jpg',
        "title": "My Neighbor Totoro",
        "name" : "Hayao Miyazaki • 1988"
      },
      {
        "img" : 'assets/food/1.jpg',
        "title": "My Neighbor Totoro",
        "name" : "Hayao Miyazaki • 1988"
      },
      {
        "img" : 'assets/food/1.jpg',
        "title": "My Neighbor Totoro",
        "name" : "Hayao Miyazaki • 1988"
      },
      {
        "img" : 'assets/food/1.jpg',
        "title": "My Neighbor Totoro",
        "name" : "Hayao Miyazaki • 1988"
      },
    ];
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad JayaPage');
  }

}
