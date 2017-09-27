import { Component, ChangeDetectorRef } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { RoutePage } from '../route/route';
import { ToastController } from 'ionic-angular';

declare var cordova: any;
declare var captuvo: any;
declare var Honeywell: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public toBarcode: any = "";
  public fromBarcode: any = "";
  barcodes: number[] = [];
  scanned: boolean = false;
  error: boolean = false;
  starting: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public appCtrl: App, private cd: ChangeDetectorRef) {
    var self = this;
    if(captuvo!=undefined){
      captuvo.registerScannerCallback(function(barcode) {
           if(!(barcode.match(/([0-9]+:[[0-9]+)/g))) {
            self.error = true;
            self.toastError();
            self.cd.detectChanges();
            return;
          }
          else {
            self.error=false;
            self.cd.detectChanges();
          }

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
    }
    if(Honeywell!=undefined) {
      Honeywell.onBarcodeEvent(function (data) {
        console.log(data.barcodeData);
        var barcode = data.barcodeData;
           if(!(barcode.match(/([0-9]+:[[0-9]+)/g))) {
            self.toastError();
            self.cd.detectChanges();
            return;
          }
          else {
            self.error=false;
            self.cd.detectChanges();
          }

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
    }, function (reason) {
        console.error(reason);
    });
    } else {
      this.fakeBarcode();
    }
    this.starting = "Scan your starting point bar code...";
  }
  fakeBarcode(){
    this.navCtrl.setRoot(RoutePage,{'from':"47:27",'to':"68:20"});
  }
  toastError() {
    let toast = this.toastCtrl.create({
      message: 'Invalid Barcode',
      duration: 3000,
      position: 'top',
      cssClass: 'toast'
    });
    toast.present();
  }

}
