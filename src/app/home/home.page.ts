import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertController, LoadingController, Platform } from '@ionic/angular';

import { HTTP } from '@ionic-native/http/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  route: Router;
  offline: any;
  ios: boolean;
  lang: any;

  content: [];

  constructor(
    private http: HTTP,
    private iab: InAppBrowser,
    private platform: Platform,
    private nativeStorage: NativeStorage,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {

    // Check if is runing on iOS
    this.ios = platform.is('ios');

    // Check / Get Current Language
    this.nativeStorage.getItem('language')
    .then(
      data => {
        this.lang = data;
      },
      error => console.log(error)
    );

    // this.platform.ready().then((readySource) => {
      // console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code

    this.nativeStorage.getItem('isOffline')
    .then(
      data => {
        this.offline = true;
        // this.localGET();

        this.http.useBasicAuth('mail@example.de', 'Raute123');

        this.http.get('https://api.jankoll.de/rest/updated', {}, {})
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

    // });

  }

  localGET() {
    this.nativeStorage.getItem('database')
    .then(
      data => {
        this.content = data.main;
        console.log(data.meta);

      },
      error => console.log(error)
    );
  }

  // Get Rest Data
  restGET() {
    // REST Authentication
    this.http.useBasicAuth('mail@example.de', 'Raute123');

    this.http.get(`https://api.jankoll.de/rest/${this.lang}/main`, {}, {})
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
    let title = 'Auf Gerät Speichern';
    let msg = 'Möchtest du alle Inhalte auf deinem Smartphone Speichern?';
    let cancel = 'Abbrechen';

    if (this.lang == 'en') {
      title = 'Save to device';
      msg = 'Do you want to save all the content on your smartphone?';
      cancel = 'Cancel';
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
    let msg = 'Wird heruntergeladen...';

    if (this.lang == 'en') {
      msg = 'Downloading...';
    }

    this.loadingController.create({
      message: msg
    }).then((res) => {
      res.present();
    });


    // this.presentLoading('Wird heruntergeladen...', 90000);

    // REST Authentication
    this.http.useBasicAuth('mail@example.de', 'Raute123');


    this.http.get('https://api.jankoll.de/rest/updated', {}, {})
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
    this.http.get(`https://api.jankoll.de/rest/${this.lang}/download`, {}, {})
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
    let title = 'Gespeicherte Inhalte Löschen';
    let msg = 'Möchtest du alle gespeicherten Inhalte Löschen?';
    let cancel = 'Abbrechen';
    let del = 'Löschen';
    let loading = 'Daten werden gelöscht...';

    if (this.lang == 'en') {
      title = 'Clear saved data';
      msg = 'Do you want to delete all saved data?';
      cancel = 'Cancel';
      del = 'Delete';
      loading = 'Deleting...';
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
          text: del,
          handler: () => {
            this.nativeStorage.clear()
              .then(
                data => {
                  this.presentLoading(loading, 3000);
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

    let title = 'Es sind neue Inhalte verfügbar';
    let msg = 'Möchtest du die Inhalte aktualisieren?';
    let cancel = 'Abbrechen';
    let upd = 'Aktualisieren';

    if (this.lang == 'en') {
      title = 'There is new content available';
      msg = 'Do you want to update the content?';
      cancel = 'Cancel';
      upd = 'Update';
    }


    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: cancel,
          role: 'cancel',
          handler: () => {
            this.localGET();
          }
        }, {
          text: upd,
          handler: () => {
            this.downloadData();
          }
        }
      ]
    });

    await alert.present();
  }
}
