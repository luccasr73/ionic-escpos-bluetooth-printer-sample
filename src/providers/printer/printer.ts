import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Injectable } from '@angular/core';

@Injectable()
export class PrinterProvider {

  constructor(private bluetoothSerial: BluetoothSerial) {}

  enableBluetooth(){
    return this.bluetoothSerial.enable();
  }

  searchBluetooth(){
    return this.bluetoothSerial.list();
  }

  connectBluetooth(address){
    return this.bluetoothSerial.connect(address);
  }

  printData(data){
    return this.bluetoothSerial.write(data);
  }

  disconnectBluetooth(){
    return this.bluetoothSerial.disconnect();
  }

}
