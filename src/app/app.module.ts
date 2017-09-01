
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';

import { AsiansgPage } from './../pages/asiansg/asiansg';
  import { AsiansgdetailPage } from './../pages/asiansg/asiansgdetail/asiansgdetail';
import { AsiansPage } from './../pages/asians/asians';
  import { AsiansdetailPage } from './../pages/asians/asiansdetail/asiansdetail';
import { LittlekhPage } from './../pages/littlekh/littlekh';
  import { LittledetailPage } from './../pages/littlekh/littledetail/Littledetail';
import { JayaPage } from './../pages/jaya/jaya';
  import { JayadetailPage } from './../pages/jaya/jayadetail/jayadetail';
  import { DataProvider } from '../providers/data/data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,

    AsiansgPage,
      AsiansgdetailPage,
    AsiansPage,
      AsiansdetailPage,
    LittlekhPage,
      LittledetailPage,
    JayaPage,
      JayadetailPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,

    AsiansgPage,
      AsiansgdetailPage,
    AsiansPage,
      AsiansdetailPage,
    LittlekhPage,
      LittledetailPage,
    JayaPage,
      JayadetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
