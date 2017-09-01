import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

import { LittledetailPage } from './../littlekh/littledetail/Littledetail';

@Component({
  selector: 'page-littlekh',
  templateUrl: 'littlekh.html',
})
export class LittlekhPage {
  // public littlekhs = new Array();
  // public Data_detail=new Array();
  littlekhs: any = 0;
  
  constructor(
    params: NavParams, public navCtrl: NavController, public data: DataProvider) {
      this.data.loadAll().then(result => {
        this.littlekhs = result;
      });
    }

   detailsPage(id) {

    this.navCtrl.push(LittledetailPage, {code: id});
  }

}