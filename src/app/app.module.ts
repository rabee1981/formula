import { FormulaPageModule } from './../pages/formula/formula.module';
import { PlanetsPage } from './../pages/planets/planets';
import { ConstPage } from './../pages/const/const';
import { LightPage } from './../pages/light/light';
import { ElectroPage } from './../pages/electro/electro';
import { MechanicPage } from './../pages/mechanic/mechanic';
import { PlanetsPageModule } from './../pages/planets/planets.module';
import { ConstPageModule } from './../pages/const/const.module';
import { LightPageModule } from './../pages/light/light.module';
import { ElectroPageModule } from './../pages/electro/electro.module';
import { MechanicPageModule } from './../pages/mechanic/mechanic.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AdMobFree } from '@ionic-native/admob-free';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormulaPage } from '../pages/formula/formula';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    MechanicPageModule,
    ElectroPageModule,
    LightPageModule,
    ConstPageModule,
    PlanetsPageModule,
    FormulaPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MechanicPage,
    ElectroPage,
    LightPage,
    ConstPage,
    PlanetsPage,
    FormulaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
