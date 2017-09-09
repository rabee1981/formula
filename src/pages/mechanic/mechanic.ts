import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MechanicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mechanic',
  templateUrl: 'mechanic.html',
})
export class MechanicPage {
  titleList: string[] = [
    'الكينماتيكا - الحركة على  ّخط مستقيم',
    'الديناميكا',
    'الشغل والطاقة والقدرة',
    'الدفع ّ وكمية الحركة',
    'الحركة الدائرية',
    'الحركة التوافقية البسيطة',
    'الجاذبية']
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  selected(index) {
    this.navCtrl.push('FormulaPage', {title : this.titleList[index] , formulaImage : `assets/formula/arabic/mechanic/${index}.png`})
  }
}
