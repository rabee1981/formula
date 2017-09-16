import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private admobFree: AdMobFree) {
    platform.ready().then(() => {
      this.admobInit()
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  admobInit() {
    let banner
    if (this.platform.is('android')) {
      banner = 'ca-app-pub-9268480526904407/9511789793'
    } else if (this.platform.is('ios')) {
      banner = 'ca-app-pub-9268480526904407/3169742727';
    }
    let adMobBannerOptions: AdMobFreeBannerConfig = {
      id: banner,
      overlap: false,
      autoShow: true,
    }
    this.admobFree.banner.config(adMobBannerOptions)
    this.admobFree.banner.prepare()
      .catch(err => console.log(err))
  }
}

