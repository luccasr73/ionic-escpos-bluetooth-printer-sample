import { Injectable } from "@angular/core";
import { BluetoothProvider } from "../bluetooth/bluetooth.provider";
import Encoder from "esc-pos-encoder-ionic";
import { commands } from "../../utils/printer/printer-commands";

@Injectable()
export class PrinterProvider {
  constructor(private bluetooth: BluetoothProvider) {}

  async print(deviceAddress: string, data: ArrayBuffer) {
    this.bluetooth.connect(deviceAddress).subscribe(
      async () => {
        await this.bluetooth.writeData(data);
        await this.bluetooth.disconnect();
      },
      (error) => {
        throw new Error(error);
      }
    );
  }

  buildTemplate(data: any) {
    // remove this when generate the receipt using another method
    if (!data.title) {
      data.title = "Title";
    }
    if (!data.text) {
      data.text = "Lorem ipsum dolor sied ullamcorper lectus.";
    }

    const encoder = new Encoder();
    const template = encoder.initialize();
    template
      .codepage("windows1251")
      .align("center")
      .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
      .line(data.title)
      .raw(commands.TEXT_FORMAT.TXT_NORMAL)
      .text(commands.HORIZONTAL_LINE.HR_58MM)
      .text(commands.HORIZONTAL_LINE.HR2_58MM)
      .text(data.text)
      .newline()
      .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
      .text("简体中文")
      .barcode("3130630574613")
      .newline()
      .newline()
      .newline();

    return template.encode();
  }
}
