import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HTTP } from '@ionic-native/http/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  articleId: any;
  route: Router;
  mainNav: any;
  metaNav: any;
  lang: any;
  offline: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private http: HTTP,
    private iab: InAppBrowser,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController
  ) {
    this.initializeApp();

    // Check / Get Current Language
    this.nativeStorage.getItem('language')
    .then(
      data => {
        this.lang = data;
        this.callData();
      },
      error => {
        this.toggleLang('de'); // <- also sets youtube default == false
        this.callData();
      }
    );
  }

  // Call Data
  callData() {
    // Check for Offline Mode
    this.nativeStorage.getItem('isOffline')
    .then(
      data => {
        this.localGET();
        this.offline = true;
      },
      error => this.restGET()
    );
  }

  // Toggle Language
  toggleLang(code) {
    this.nativeStorage.setItem('youtube', 'false')
      .then(
        (data) => {
          console.log(data);
        },
        error => console.error('Error storing item', error)
    );

    this.nativeStorage.setItem('language', code)
      .then(
        (data) => {
          this.loadingController.create({
            duration: 500
          }).then((res) => {
            res.present();

            res.onDidDismiss().then((dis) => {
              window.location.reload();
            });
          });
        },
        error => console.error('Error storing item', error)
    );
  }

  // Get Local Data
  localGET() {
    this.nativeStorage.getItem('database')
    .then(
      data => {
        this.mainNav = data.main;
        this.metaNav = data.meta;
      },
      error => console.log(error)
    );
  }

  // Get Rest Data
  restGET() {
    // HTTP Request Main
    this.http.useBasicAuth('mail@example.de', 'Raute123');

    this.http.get(`https://api.jankoll.de/rest/${this.lang}/main`, {}, {})
    .then(data => {
      this.mainNav = JSON.parse(data.data); // data received by server
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });

    // HTTP Request Meta
    this.http.get(`https://api.jankoll.de/rest/${this.lang}/meta`, {}, {})
    .then(data => {
      this.metaNav = JSON.parse(data.data); // data received by server
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  createInAppBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'toolbarposition=top,hideurlbar=yes');
  }
}
