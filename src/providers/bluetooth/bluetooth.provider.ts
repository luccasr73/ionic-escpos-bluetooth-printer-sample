import { BluetoothSerial } from "@ionic-native/bluetooth-serial";
import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";
import { Device } from "./bluetooth.types";

@Injectable()
export class BluetoothProvider {
  constructor(
    private bluetoothSerial: BluetoothSerial,
    private alert: AlertController
  ) {}

  enable() {
    return this.bluetoothSerial.enable();
  }

  async isEnabled() {
    try {
      await this.bluetoothSerial.isEnabled();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async isConnected() {
    try {
      await this.bluetoothSerial.isConnected();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  searchDevices(): Promise<Device[]> {
    return this.bluetoothSerial.list();
  }

  async enableAndSearch() {
    const bluetoothIsEnable = await this.isEnabled();
    if (!bluetoothIsEnable) {
      await this.enable();
    }
    return this.searchDevices();
  }

  connect(address: string) {
    return this.bluetoothSerial.connect(address);
  }

  writeData(data: ArrayBuffer) {
    return this.bluetoothSerial.write(data);
  }

  disconnect() {
    return this.bluetoothSerial.disconnect();
  }
}
