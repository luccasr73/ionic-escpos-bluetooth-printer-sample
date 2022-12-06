import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class ToastProvider {
  constructor(private toastCtrl: ToastController) {}

  create(message: string) {
    return this.toastCtrl.create({
      duration: 3000,
      message,
      position: "bottom",
    });
  }
}
