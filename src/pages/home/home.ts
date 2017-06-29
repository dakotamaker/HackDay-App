import { Component, ChangeDetectorRef } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { RoutePage } from '../route/route';

declare var cordova: any;
declare var captuvo: any;
declare var plugins: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public toBarcode: any = "";
  public fromBarcode: any = "";
  barcodes: number[] = [];
  scanned: boolean = false;
  starting: string;

  constructor(public navCtrl: NavController, public appCtrl: App, private cd: ChangeDetectorRef) {
    var self = this;
    if(captuvo!=undefined){
      captuvo.registerScannerCallback(function(barcode) {
        if(self.barcodes.length == 0){
          self.starting = "Scan your ending point bar code...";
          self.fromBarcode = barcode.toString();
        } else {
          self.scanned = true;
          self.starting = "Finding route...";
          self.toBarcode = barcode.toString();
          self.navCtrl.setRoot(RoutePage,{'from':self.fromBarcode,'to':self.toBarcode});
        }
        self.cd.detectChanges();
        self.barcodes.push(barcode);
      });
    }else if(plugins.honeywell!=undefined) {
      plugins.honeywell.listenForScans(function(barcode) {
        if(self.barcodes.length == 0){
          self.starting = "Scan your ending point bar code...";
          self.fromBarcode = barcode.toString();
        } else {
          self.scanned = true;
          self.starting = "Finding route...";
          self.toBarcode = barcode.toString();
          self.navCtrl.setRoot(RoutePage,{'from':self.fromBarcode,'to':self.toBarcode});
        }
        self.cd.detectChanges();
        self.barcodes.push(barcode);
      }, function(error) {
        // do something with 'errir'
      console.log('Something went wrong: ' + error);
      });
    } else {
      this.fakeBarcode();
    }
    this.starting = "Scan your starting point bar code...";
  }
  fakeBarcode(){
    this.navCtrl.setRoot(RoutePage,{'from':1234,'to':1234});
  }

}
