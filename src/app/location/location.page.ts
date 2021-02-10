import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

// Import Components
import { ArticlePreviewComponent } from '../components/article-preview/article-preview.component';
import { LegendComponent } from '../components/legend/legend.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  // Coords
  latitude: number;
  longitude: number;
  hp: number;
  wp: number;

  //QR-Code Data
  // scanSub: any;
  // qrText: string;

  // General Data
  data: any;
  // route: Router;

  constructor(
    private modalCtrl: ModalController,
    public platform: Platform,
    public alertController: AlertController,
    private qrScanner: QRScanner,
    private route: Router
  )  {
    // Call and Update geo Location
    this.getCurrentLocation()
    // setInterval(() =>
    //   this.getCurrentLocation()
    // , 5000);

    // subscribe to cammera close
    this.platform.backButton.subscribeWithPriority(0, () => {

      // Android Physical Back Button???
      // document.getElementsByTagName('body')[0].style.opacity = '1';
      // Use Class to Toggle Backgound Visibility
      document.getElementsByTagName('body')[0].classList.toggle("qractive");

      this.qrScanner.destroy();

    });
  }

  // fetch data
  ngOnInit() {
    fetch('./assets/data/location.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });

    this.getCurrentLocation()
  }

  // Call and set current geo location
  async getCurrentLocation() {
    let coords = {
      "leftTop" : {
        "lat": 47.769027,
        "lon": 8.994262
      },
      "rightBot" : {
        "lat": 47.763431,
        "lon": 8.999337
      }
    }

    let position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    // this.latitude = 47.767574;
    // this.longitude = 8.996252;

    let height = coords.leftTop.lat - coords.rightBot.lat;
    let width = coords.rightBot.lon - coords.leftTop.lon;

    this.hp = ((coords.leftTop.lat - this.latitude) * 100) / height;
    this.wp = ((coords.rightBot.lon - this.longitude) * 100) / width;
  }

  // Set artefact geo location
  setObjectLocation(data) {
    let coords = {
      "leftTop" : {
        "lat": 47.769027,
        "lon": 8.994262
      },
      "rightBot" : {
        "lat": 47.763431,
        "lon": 8.999337
      }
    }

    let height = coords.leftTop.lat - coords.rightBot.lat;
    let width = coords.rightBot.lon - coords.leftTop.lon;

    let ycoord = ((coords.leftTop.lat - data.x) * 100) / height;
    let xcoord = ((coords.rightBot.lon - data.y) * 100) / width;

    return "right:" + xcoord + "%; top:" + ycoord + "%;";

  }

  // Modal controllers
  async showModal(id) {
    const modal = await this.modalCtrl.create({
      component: ArticlePreviewComponent,
      componentProps: {
        data: this.data[id]
      },
      // backdropDismiss:false,
      swipeToClose: true,
      cssClass: 'articleprev'
    })
    await modal.present();
  }

  async legend() {
    const modal = await this.modalCtrl.create({
      component: LegendComponent,
      // backdropDismiss:false,
      swipeToClose: true,
      cssClass: 'legend'
    })
    await modal.present();
  }

  // QR-Code Functions
  async accessCamera() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Kamera deaktiviert',
      message: 'Wenn du einen QR-Code Scannen möchtest, erlaube bitte den Kamera zugriff in den Einstellungen.',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Einstellungen',
          handler: () => {
            this.qrScanner.openSettings()
          }
        }
      ]
    });

    await alert.present();
  }

  async undefinedQrCode() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Fehler',
      message: 'Der QR-Code ist entweder nicht leserlich oder gehört nicht zur Tour.',
      buttons: ['Okay']
    });

    await alert.present();
  }

  startScanning() {
  // Optionally request the permission early
    this.qrScanner.prepare().
      then((status: QRScannerStatus) => {

        if (status.authorized) {
          this.qrScanner.show();
          // Use Class to Toggle Backgound Visibility
          document.getElementsByTagName('body')[0].classList.toggle("qractive");
          console.log("AUTHORIZED ");

          // debugger
          let scanSub = this.qrScanner.scan()
            .subscribe((textFound: string) => {

              console.log(textFound);

              // Use Class to Toggle Backgound Visibility
              document.getElementsByTagName('body')[0].classList.toggle("qractive");

              // Route to Page with textFound var

                // Array contains all possible routings
                // var routs = [];
                // this.route.config.forEach(elements => {
                //   routs.push(elements.path)
                // });

                // Check if QR-Code is valid
                if (this.data.map(x => x.name).includes(textFound)) {
                  this.route.navigate(['/article/' + textFound]);
                  console.log(textFound);

                  this.qrScanner.destroy();
                } else {
                  this.undefinedQrCode();
                  this.qrScanner.destroy();
                }
            }, (err) => {
              alert(JSON.stringify(err));
            });

        } else if (status.denied) {
          // The video preview will remain black, and scanning is disabled. We can
          // try to ask the user to change their mind, but we'll have to send them
          // to their device settings with `QRScanner.openSettings()`.
          console.log("ELSE IF");

        } else {
          // we didn't get permission, but we didn't get permanently denied. (On
          // Android, a denial isn't permanent unless the user checks the "Don't
          // ask again" box.) We can ask again at the next relevant opportunity.
          console.log("ELSE ");

        }
      })
      .catch((e: any) => {
        console.log('Error is', e);
        this.accessCamera();
      });
  }

  stopScanning() {
    // Use Class to Toggle Backgound Visibility
    document.getElementsByTagName('body')[0].classList.toggle("qractive");
    this.qrScanner.destroy();
  }

}
