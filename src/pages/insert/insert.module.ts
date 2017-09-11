import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertPage } from './insert';

@NgModule({
  declarations: [
    InsertPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertPage),
  ],
  exports: [
    InsertPage
  ]
})
export class InsertPageModule {}
