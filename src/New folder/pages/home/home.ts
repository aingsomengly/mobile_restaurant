import { AsiansPage } from '../asians/asians';
import { AsiansgPage } from '../asiansg/asiansg';
import { JayaPage } from '../jaya/jaya';
import { LittlekhPage } from '../littlekh/littlekh';


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  asiansPage = AsiansPage;
  asiansgPage = AsiansgPage;
  jayaPage  = JayaPage;
  littlekhPage = LittlekhPage

  constructor(public navCtrl: NavController) {

  }

}
