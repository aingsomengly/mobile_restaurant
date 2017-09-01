import { LittlekhPage } from './../littlekh/littlekh';
import { AsiansPage } from './../asians/asians';
import { JayaPage } from './../jaya/jaya';
import { AsiansgPage } from '../asiansg/asiansg';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  // sideBarElement: any;
  // splash = true;

  asiansgPage = AsiansgPage;
  asiansPage = AsiansPage;
  littlekhPage = LittlekhPage;
  jayaPage = JayaPage;
  


  constructor(public navCtrl: NavController) {
  }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
}
}
