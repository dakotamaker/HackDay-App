import { Component, ChangeDetectorRef } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

declare var cordova: any;
declare var captuvo: any;

@Component({
  selector: 'page-route',
  templateUrl: 'route.html'
})
export class RoutePage {
  public toBarcode: any = "";
  public fromBarcode: any = "";

  constructor(public navCtrl: NavController, public appCtrl: App, private cd: ChangeDetectorRef, private navParams: NavParams) {
    this.fromBarcode = navParams.get('from'); 
    this.toBarcode = navParams.get('to');
  }

  backHome() {
    this.navCtrl.setRoot(HomePage);
  }
}
