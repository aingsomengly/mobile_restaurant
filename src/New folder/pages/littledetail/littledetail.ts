import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@Component({
  selector: 'page-littledetail',
  templateUrl: 'littledetail.html',
})
export class LittledetailPage {
  littlekh: any = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.data.getByID(this.navParams.get('code')).then(result => {
      this.littlekh = result;
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LittledetailPage');
  }

}
