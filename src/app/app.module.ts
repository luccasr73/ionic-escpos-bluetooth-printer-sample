import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";
import { SplashScreen } from "@ionic-native/splash-screen";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HomePage } from "../pages/home/home";
import { BluetoothProvider } from "../providers/bluetooth/bluetooth.provider";
import { PrinterProvider } from "./../providers/printer/printer.provider";
import { ToastProvider } from "./../providers/toast/toast.provider";
import { MyApp } from "./app.component";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BluetoothSerial,
    BluetoothProvider,
    ToastProvider,
    PrinterProvider,
  ],
})
export class AppModule {}
