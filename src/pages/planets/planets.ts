import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {
  planetsFormulaImage;
  planetImage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  onChange(event){
    this.planetsFormulaImage = `assets/formula/arabic/planets/${event}.png`
    this.planetImage = `assets/formula/arabic/planets/images/1${event}.jpg`
  }
}
