import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-light',
  templateUrl: 'light.html',
})
export class LightPage {
  titleList : string[] = [
    'البصريات الهندسية',
    'الأمواج الميكانيكية والكهرومغناطيسية',
    'الذرّة والنواة',
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selected(index) {
    this.navCtrl.push('FormulaPage', {title : this.titleList[index] , formulaImage : `assets/formula/arabic/light/${index}.png`})
  }

}
