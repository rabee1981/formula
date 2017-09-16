import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private admobFree: AdMobFree) {

  }
  selected(choosen : string){
    this.navCtrl.push(choosen)
  }
}
