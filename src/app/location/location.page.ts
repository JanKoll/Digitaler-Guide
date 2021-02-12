import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, Platform, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

// Import Components
import { ArticlePreviewComponent } from '../components/article-preview/article-preview.component';
import { LegendComponent } from '../components/legend/legend.component';

import { HTTP } from '@ionic-native/http/ngx';

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

  // General Data
  locationId: any;
  content: any;

  constructor(
    private modalCtrl: ModalController,
    public platform: Platform,
    public alertController: AlertController,
    private qrScanner: QRScanner,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private http: HTTP
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

    // GET Route and poll data
    this.activatedRoute.params.subscribe(params => {

         // REST Authentication
         this.http.useBasicAuth('mail@example.de', 'Raute123');

         //HTTP GET
         this.http.get(`http://api.jankoll.de/rest/map/${params['locationId']}`, {}, {})
         .then(data => {
           this.content = JSON.parse(data.data); // data received by server
         })
         .catch(error => {
           console.log(error.status);
           console.log(error.error); // error message as string
           console.log(error.headers);
         });
    });



  }

  ngOnInit() {
    this.getCurrentLocation()
  }

  // Call and set current geo location
  async getCurrentLocation() {
    // let coords = {
    //   "leftTop" : {
    //     "lat": 47.769027,
    //     "lon": 8.994262
    //   },
    //   "rightBot" : {
    //     "lat": 47.763431,
    //     "lon": 8.999337
    //   }
    // }

    let position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    let height = this.content.body.coords.leftTop.lat - this.content.body.coords.rightBot.lat;
    let width = this.content.body.coords.rightBot.lon - this.content.body.coords.leftTop.lon;

    this.hp = ((this.content.body.coords.leftTop.lat - this.latitude) * 100) / height;
    this.wp = ((this.content.body.coords.rightBot.lon - this.longitude) * 100) / width;
  }

  // Set artefact geo location
  setObjectLocation(geoData, test) {
    let height = this.content.body.coords.leftTop.lat - this.content.body.coords.rightBot.lat;
    let width = this.content.body.coords.rightBot.lon - this.content.body.coords.leftTop.lon;

    let ycoord = ((this.content.body.coords.leftTop.lat - geoData.lat) * 100) / height;
    let xcoord = ((this.content.body.coords.rightBot.lon - geoData.lon) * 100) / width;

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
                if (this.content.children.map(x => x.id).includes(textFound)) {
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
