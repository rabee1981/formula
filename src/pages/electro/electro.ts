import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-electro',
  templateUrl: 'electro.html',
})
export class ElectroPage {
  titleList : string[] =[
    'الكهرباء الساكنة',
    'التيّار الكهربائي',
    'الحقل المغناطيسي',
    'القوّة الدافعة الكهربائية المستحثّة'
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selected(index) {
    this.navCtrl.push('FormulaPage', {title : this.titleList[index] , formulaImage : `assets/formula/arabic/electro/${index}.png`})
  }

}
