import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { AsiansPage } from '../pages/asians/asians';
import { AsiansgPage } from '../pages/asiansg/asiansg';
import { JayaPage } from '../pages/jaya/jaya';
import { LittlekhPage } from '../pages/littlekh/littlekh';
  import { LittledetailPage } from '../pages/littledetail/littledetail';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AsiansPage,
    AsiansgPage,
    JayaPage,
    LittlekhPage,
      LittledetailPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AsiansPage,
    AsiansgPage,
    JayaPage,
    LittlekhPage,
      LittledetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
