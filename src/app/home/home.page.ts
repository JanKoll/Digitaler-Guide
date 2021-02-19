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
    public loadingController: LoadingController,
    // private network: Network
  ) {
    this.nativeStorage.getItem('isOffline')
    .then(
      data => {
        this.offline = true;
        this.localGET();
      },
      error => this.restGET()
    );
    //
    // let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    //   console.log('network was disconnected :-(');
    //   this.nativeStorage.setItem('network', {online: false})
    //     .then(
    //       (data) => {
    //         console.log(data);
    //         this.network = false;
    //       },
    //       error => console.error('Error storing item', error)
    //   );
    // });
    //
    // let connectSubscription = this.network.onConnect().subscribe(() => {
    //   console.log('network connected!');
    //   this.nativeStorage.setItem('network', {online: true})
    //     .then(
    //       (datadata) => {
    //         console.log(data);
    //         this.network = true;
    //       },
    //       error => console.error('Error storing item', error)
    //   );
    // });

  }

  localGET() {
    this.nativeStorage.getItem('main')
    .then(
      data => {
        this.content = data;
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
    // this.loadingController.create({
    //   message: 'Wird heruntergeladen...'
    // }).then((res) => {
    //   res.present();
    // });

    this.presentLoading('Wird heruntergeladen...', 90000);

    // REST Authentication
    this.http.useBasicAuth('mail@example.de', 'Raute123');

    // save main
    this.http.get('http://api.jankoll.de/rest/main', {}, {})
    .then(dataMain => {
      this.nativeStorage.setItem('main', JSON.parse(dataMain.data))
        .then(
          (dataMain) => {
            console.log(dataMain);

            dataMain.forEach(element => {
              switch (element.type[0].name) {
                case 'location':

                  //HTTP GET
                  this.http.get(`http://api.jankoll.de/rest/map/${element.id}`, {}, {})
                  .then(dataLocation => {

                    this.nativeStorage.setItem(`location/${element.id}`, JSON.parse(dataLocation.data))
                      .then(
                        (dataLocation) => {
                          dataLocation.children.forEach(item => {
                            let page = item.id.split("/");

                            //HTTP GET
                            this.http.get(`http://api.jankoll.de/rest/article/${page[0]}/${page[1]}`, {}, {})
                            .then(dataPage => {
                              this.nativeStorage.setItem(item.id, JSON.parse(dataPage.data))
                                .then(
                                  (dataPage) => console.log(dataPage),
                                  error => console.error('Error storing item', error)
                              );
                            }).then(
                              (dataLocation) => {
                                // After getting all Data Reload Window
                                // window.location.reload()
                              }
                            )
                            .catch(error => {
                              console.log(error.status);
                              console.log(error.error); // error message as string
                              console.log(error.headers);
                            });
                          });
                        },
                        error => console.error('Error storing item', error)
                    );
                  })
                  .catch(error => {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);
                  });

                  break;

                case 'webview':
                  // Not necessary
                  break;

                default:

                  //HTTP GET
                  this.http.get(`http://api.jankoll.de/rest/article/${element.id}`, {}, {})
                  .then(dataArticle => {

                    this.nativeStorage.setItem(`article/${element.id}`, JSON.parse(dataArticle.data))
                      .then(
                        (dataArticle) => console.log(dataArticle),
                        error => console.error('Error storing item', error)
                    );

                  })
                  .catch(error => {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);
                  });

                  break;
              }
            });


          },
          error => console.error('Error storing item', error)
      );
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });


    // save meta
    this.http.get('http://api.jankoll.de/rest/meta', {}, {})
    .then(dataMeta => {
      this.nativeStorage.setItem('meta', JSON.parse(dataMeta.data))
        .then(
          (dataMeta) => {
            console.log("META: " + dataMeta)

            dataMeta.forEach(element => {

              //HTTP GET
              this.http.get(`http://api.jankoll.de/rest/article/${element.id}`, {}, {})
              .then(dataArticle => {
                this.nativeStorage.setItem(`article/${element.id}`, JSON.parse(dataArticle.data))
                  .then(
                    (dataArticle) => console.log("Article: " + dataArticle),
                    error => console.error('Error storing item', error)
                );
              })
              .catch(error => {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
              });
            });
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
                  this.presentLoading('Daten werden gelöscht...', 5000);
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
}
