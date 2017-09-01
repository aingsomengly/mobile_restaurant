import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LittlekhPage } from './littlekh';
import { LittledetailPage } from '../littledetail/littledetail';


@NgModule({
  declarations: [
    //LittlekhPage,
    LittledetailPage
  ],
  imports: [
    IonicPageModule.forChild(LittlekhPage),
  ],
})
export class LittlekhPageModule {
  
}
