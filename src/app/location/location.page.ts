import { Component, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, Platform, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

// Import Components
import { ArticlePreviewComponent } from '../components/article-preview/article-preview.component';
import { LegendComponent } from '../components/legend/legend.component';

import { HTTP } from '@ionic-native/http/ngx';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {
  // Coords
  coords: any;
  latitude: number;
  longitude: number;
  pointcoord: any;
  interval: any;

  // General Data
  title: any;
  locationId: any;
  content: any;
  lang: any;

  constructor(
    private modalCtrl: ModalController,
    public platform: Platform,
    public alertController: AlertController,
    public sanitizer: DomSanitizer,
    private qrScanner: QRScanner,
    private zone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HTTP,
    private nativeStorage: NativeStorage
  )  {
    // Check / Get Current Language
    this.nativeStorage.getItem('language')
    .then(
      data => {
        this.lang = data;

        if (data == 'de') {
          this.title = 'Digitaler Guide'
        } else {
          this.title = 'Digital Guide'
        }

        // Check for Offline Mode
        this.nativeStorage.getItem('isOffline')
        .then(
          res => {
            this.localGET();
          },
          error => this.restGET()
        );
      },
      error => console.log(error)
    );

    // subscribe to cammera close
    this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName('body')[0].classList.toggle("qractive");
      this.qrScanner.destroy();
    });

    // Android go Back
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['..']);
    });
  }

  route(id) {
    this.router.navigate(['/article/', id]);
  }

  goBack() {
    this.router.navigate(['..']);
  }

  // Get Local Data
  localGET() {
    this.activatedRoute.params.subscribe(params => {
      let path = params['locationId'];

      this.nativeStorage.getItem('database')
        .then(
          data => {
            data.main.forEach(element => {
              if (element.id == path) {
                  this.content = element;
                  this.coords = element.coords;
              }
            });
            this.callGeoInterval();
          },
          error => console.log(error)
        );
    });
  }

  // Get Rest Data
  restGET() {
    this.activatedRoute.params.subscribe(params => {

         // REST Authentication
         this.http.useBasicAuth('mail@example.de', 'Raute123');

         //HTTP GET
         this.http.get(`https://api.jankoll.de/rest/${this.lang}/map/${params['locationId']}`, {}, {})
         .then(data => {
           this.content = JSON.parse(data.data); // data received by server
           this.coords = this.content.coords;
           this.callGeoInterval();
         })
         .catch(error => {
           console.log(error.status);
           console.log(error.error); // error message as string
           console.log(error.headers);
         });
    });
  }


  ionViewWillLeave() {
    clearInterval(this.interval);
  }

  callGeoInterval() {
    // Call and Update geo Location
    this.interval = setInterval(() =>
      this.getCurrentLocation()
    , 1000);
  }

  // Call and set current geo location
  async getCurrentLocation() {
    let position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;


    let height = this.coords.leftTop.lat - this.coords.rightBot.lat;
    let width = this.coords.rightBot.lon - this.coords.leftTop.lon;

    this.pointcoord = 'top: ' + ((this.coords.leftTop.lat - this.latitude) * 100) / height + '%; right: ' + ((this.coords.rightBot.lon - this.longitude) * 100) / width + '%; opacity: 1;';

    if (
      (((this.coords.leftTop.lat - this.latitude) * 100) / height) > 100
      || (((this.coords.leftTop.lat - this.latitude) * 100) / height) < 0
    ) {
      clearInterval(this.interval);
      this.interval = setInterval(() =>
        this.getCurrentLocation()
      , 10000);
    }
  }

  // Set artefact geo location
  setObjectLocation(geoData) {
    let height = this.coords.leftTop.lat - this.coords.rightBot.lat;
    let width = this.coords.rightBot.lon - this.coords.leftTop.lon;

    let ycoord = ((this.coords.leftTop.lat - geoData.lat) * 100) / height;
    let xcoord = ((this.coords.rightBot.lon - geoData.lon) * 100) / width;

    return "right:" + xcoord + "%; top:" + ycoord + "%;";
  }

  // Modal controllers
  async showModal(id) {
    const modal = await this.modalCtrl.create({
      component: ArticlePreviewComponent,
      componentProps: {
        data: this.content.children[id]
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
    let title = 'Kamera deaktiviert';
    let msg = 'Wenn du einen QR-Code Scannen möchtest, erlaube bitte den Kamera zugriff in den Einstellungen.';
    let cancel = 'Abbrechen';
    let sett = 'Einstellungen';

    if (this.lang == 'en') {
      title = 'Camera disabled';
      msg = 'If you want to scan a QR code, please allow camera access in the settings.';
      cancel = 'Cancel';
      sett = 'Settings';
    }

    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: cancel,
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: sett,
          handler: () => {
            this.qrScanner.openSettings()
          }
        }
      ]
    });

    await alert.present();
  }

  async undefinedQrCode() {
    let title = 'Fehler';
    let msg = 'Der QR-Code ist entweder nicht leserlich oder gehört nicht zur Tour.';

    if (this.lang == 'en') {
      title = 'Error';
      msg = 'The QR code is either not readable or does not belong to the tour.';
    }

    const alert = await this.alertController.create({
      header: title,
      message: msg,
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

          // Exit on android back
          this.platform.backButton.subscribeWithPriority(15, () => {
            document.getElementsByTagName('body')[0].classList.toggle("qractive");
            this.qrScanner.destroy();
          });

          // debugger
          let scanSub = this.qrScanner.scan()
            .subscribe((textFound: string) => {

              // Use Class to Toggle Backgound Visibility
              document.getElementsByTagName('body')[0].classList.toggle("qractive");

              // Check if QR-Code is valid
              if (this.content.children.map(x => x.id).includes(textFound)) {
                this.zone.run(() => {
                  this.router.navigate(['/article/', textFound]);
                });
                this.qrScanner.destroy();
              } else {
                this.undefinedQrCode();
                this.qrScanner.destroy();
              }
            }, (err) => {
              alert(JSON.stringify(err));
            });
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

  saveURL(type, id: string) {
    console.log(id);

    let saveurl = 'data:' + type + ';base64,' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(saveurl);
  }

}
