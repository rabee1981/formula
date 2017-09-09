import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectroPage } from './electro';

@NgModule({
  declarations: [
    ElectroPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectroPage),
  ],
})
export class ElectroPageModule {}
