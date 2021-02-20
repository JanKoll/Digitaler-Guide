import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertController, LoadingController } from '@ionic/angular';

import { HTTP } from '@ionic-native/http/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  route: Router;
  offline: any;
  network: any;

  content: [];

  constructor(
    private http: HTTP,
    private iab: InAppBrowser,
    private nativeStorage: NativeStorage,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.nativeStorage.getItem('isOffline')
    .then(
      data => {
        this.offline = true;

        this.http.useBasicAuth('mail@example.de', 'Raute123');

        this.http.get('http://api.jankoll.de/rest/updated', {}, {})
        .then(data => {
          let storage = JSON.parse(data.data);

          this.nativeStorage.getItem('lastupdated')
          .then(
            data => {
              if (data.date != storage.date) {
                this.updateData();
              } else {
                this.localGET();
              }
            },
            error => {
              console.log(error);
              this.localGET();
            }
          );
        })
        .catch(error => {
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          this.localGET();
        });
      },
      error => this.restGET()
    );
  }

  localGET() {
    this.nativeStorage.getItem('database')
    .then(
      data => {
        this.content = data.main;
      },
      error => console.log(error)
    );
  }

  // Get Rest Data
  restGET() {
    // REST Authentication
    this.http.useBasicAuth('mail@example.de', 'Raute123');

    this.http.get('http://api.jankoll.de/rest/main', {}, {})
    .then(data => {
      // console.log(data.status);
      this.content = JSON.parse(data.data); // data received by server
      // console.log(data.headers);
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }

  // Open BrowserModule
  createInAppBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'toolbarposition=top,hideurlbar=yes');
  }

  // Download Data
  async pollData() {
    const alert = await this.alertController.create({
      header: 'Auf Gerät Speichern',
      message: 'Möchtest du alle Inhalte auf deinem Smartphone Speichern?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: () => {
            this.nativeStorage.setItem('isOffline', { offline: true })
              .then(
                (data) => this.downloadData(),
                error => console.error('Error storing item', error)
            );
            // window.location.reload();
          }
        }
      ]
    });

    await alert.present();
  }

  presentLoading(says, duration) {

    this.loadingController.create({
      message: says,
      duration: duration
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        window.location.reload();
      });
    });
  }

  downloadData() {
    this.loadingController.create({
      message: 'Wird heruntergeladen...'
    }).then((res) => {
      res.present();
    });


    // this.presentLoading('Wird heruntergeladen...', 90000);

    // REST Authentication
    this.http.useBasicAuth('mail@example.de', 'Raute123');


    this.http.get('http://api.jankoll.de/rest/updated', {}, {})
    .then(data => {
      this.nativeStorage.setItem('lastupdated', JSON.parse(data.data))
        .then(
          (data) => {
            console.log(data);
          },
          error => console.error('Error storing item', error)
      );
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });

    // save main
    this.http.get('http://api.jankoll.de/rest/download', {}, {})
    .then(data => {
      this.nativeStorage.setItem('database', JSON.parse(data.data))
        .then(
          (data) => {
            // console.log(data);
            window.location.reload();
          },
          error => console.error('Error storing item', error)
      );
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });

  }

  // Offload Data
  async deleteData() {
    const alert = await this.alertController.create({
      header: 'Gespeicherte Inhalte Löschen',
      message: 'Möchtest du alle gespeicherten Inhalte Löschen?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Löschen',
          handler: () => {
            this.nativeStorage.clear()
              .then(
                data => {
                  this.presentLoading('Daten werden gelöscht...', 3000);
                  console.log(data);
                },
                error => console.error(error)
              );
          }
        }
      ]
    });

    await alert.present();
  }

  async updateData() {
    const alert = await this.alertController.create({
      header: 'Es sind neue Inhalte verfügbar',
      message: 'Möchtest du die Inhalte aktualisieren?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            this.localGET();
          }
        }, {
          text: 'Aktualisieren',
          handler: () => {
            this.downloadData();
          }
        }
      ]
    });

    await alert.present();
  }
}
