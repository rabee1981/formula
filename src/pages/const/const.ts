import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-const',
  templateUrl: 'const.html',
})
export class ConstPage {
  constImage : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onChange(event){
    this.constImage = `assets/formula/arabic/const/${event}.png`
  }

}
