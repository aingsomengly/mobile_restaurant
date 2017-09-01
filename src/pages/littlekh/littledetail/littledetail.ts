import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-littledetail',
  templateUrl: 'littledetail.html',
})
export class LittledetailPage {
  littlekh: any = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, private socialSharing: SocialSharing) {
    this.data.getByID(this.navParams.get('code')).then(result => {
      this.littlekh = result;
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LittledetailPage');
  }


  fbShare() {
    this.socialSharing.shareViaFacebook("shareViaFacebook", '{{littlekh.picture}}', "facebook.com").then(() => {
      console.log("shareViaFacebook: Success");
    }).catch(() => {
      console.error("shareViaFacebook: failed");
    });
  }

  twShare() {
    this.socialSharing.shareViaTwitter("shareViaTwitter", '{{littlekh.picture}}', "twitter.com").then(() => {
      console.log("shareViaTwitter: Success");
    }).catch(() => {
      console.error("shareViaTwitter: failed");
    });
  }

  // gpShare() {
  //   this.socialSharing.shareViagoogleplus("shareViaGoogleplus", '{{littlekh.picture}}', "plus.google.com").then(() => {
  //     console.log("shareViaGoogleplus: Success");
  //   }).catch(() => {
  //     console.error("shareViaGoogleplus: failed");
  //   });
  // }
  

}
