import { Component, ChangeDetectorRef } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

declare var cordova: any;
declare var captuvo: any;
declare var EasyStar: any;

@Component({
  selector: 'page-route',
  templateUrl: 'route.html'
})
export class RoutePage {
  public toBarcode: any = "";
  public fromBarcode: any = "";
  public path: any;

  constructor(public navCtrl: NavController, public appCtrl: App, private cd: ChangeDetectorRef, private navParams: NavParams) {

    var grid = [[0,0,0,0,1,0,0,0,0,0],[0,0,1,0,1,0,0,1,1,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];

    this.fromBarcode = navParams.get('from'); 
    this.toBarcode = navParams.get('to');

    findPath(grid, 1, 1, 6, 1);
  }

  backHome() {
    this.navCtrl.setRoot(HomePage);
  }
}

function findPath(grid, startX, startY, endX, endY) {
    var easystar = new EasyStar.js();

    easystar.setGrid(grid);

    easystar.setAcceptableTiles([0]);

    easystar.findPath(startX, startY, endX, endY, function (path) {
      if(path === null) {
         alert("Path was not found");
      } else {
         alert("Path found!")
      }
    });

    easystar.calculate();
  }

