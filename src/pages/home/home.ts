import { Component, Input } from "@angular/core";
import {
  AlertController,
  LoadingController,
  NavController,
} from "ionic-angular";
import { BluetoothProvider } from "../../providers/bluetooth/bluetooth.provider";
import { PrinterProvider } from "../../providers/printer/printer.provider";
import { ToastProvider } from "./../../providers/toast/toast.provider";
import { Form } from "./home.types";
@Component({ selector: "page-home", templateUrl: "home.html" })
export class HomePage {
  @Input() form: Form = {
    title: "",
    text: "",
  };

  constructor(
    public navCtrl: NavController,
    private bluetooth: BluetoothProvider,
    private alert: AlertController,
    private loading: LoadingController,
    private toast: ToastProvider,
    private printer: PrinterProvider
  ) {}

  async printWithSelectedDevice(deviceAddress: string, data: Form) {
    const loading = this.loading.create({
      content: "sending data to printer...",
    });

    if (!deviceAddress) {
      this.toast.create("Select a printer!").present();
      loading.dismiss();
      return false;
    }

    try {
      loading.present();
      const template = this.printer.buildTemplate(data);
      await this.printer.print(deviceAddress, template);
      loading.dismiss();
    } catch (error) {
      loading.dismiss();
      console.log(JSON.stringify(error));
    }
  }

  async print(data: Form) {
    try {
      const devices = await this.bluetooth.enableAndSearch();
      this.alert
        .create({
          title: "Select your printer",
          inputs: devices.map((device) => ({
            name: "device",
            value: device.address,
            label: device.name,
            type: "radio",
          })),
          buttons: [
            { text: "Cancel", role: "cancel" },
            {
              text: "Select printer",
              handler: (device) => {
                this.printWithSelectedDevice(device, data);
              },
            },
          ],
        })
        .present();
    } catch (error) {
      console.log(JSON.stringify(error));

      console.log(error);
    }
  }
}
