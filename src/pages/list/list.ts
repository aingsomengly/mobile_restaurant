import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation';
//import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,
    // private platform: Platform, private geolocation: Geolocation
  ) {
    // platform.ready().then(() => {
      
    //         // get current position
    //         geolocation.getCurrentPosition().then(pos => {
    //           console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    //         });
      
    //         const watch = geolocation.watchPosition().subscribe(pos => {
    //           console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    //         });
      
    //         // to stop watching
    //         watch.unsubscribe();
      
    //       });
  }
}