import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Injectable } from '@angular/core';

@Injectable()
export class BtPrinterProvider {

  constructor(private btSerial: BluetoothSerial) {}

  enableBt() {
    return this.btSerial.enable();
  }

  searchBt() {
    return this.btSerial.list();
  }

  connectBt(address) {
    return this.btSerial.connect(address);

  }
  printBt(data) {
    return this.btSerial.write(data);
  }
  disconectBt() {
    return this.btSerial.disconnect();
  }

}
