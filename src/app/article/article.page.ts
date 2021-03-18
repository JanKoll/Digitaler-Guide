import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AlertController, NavController, Platform, LoadingController } from '@ionic/angular';

import { HTTP } from '@ionic-native/http/ngx';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage {
  content: any;
  title: any;
  template: any;
  lang: any;
  learn: any;
  youtube: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public platform: Platform,
    public alertController: AlertController,
    private router: Router,
    public navCtrl: NavController,
    private http: HTTP,
    public loadingController: LoadingController,
    private nativeStorage: NativeStorage
  ) {
    // Check / Get Current Language
    this.nativeStorage.getItem('language')
    .then(
      data => {
        this.lang = data;

        if (data == 'de') {
          this.learn = 'Mehr erleben im'
        } else {
          this.learn = 'Experience more at'
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

    // Android go Back
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.goBack();
    });

    // check if youtube is allowed
    this.nativeStorage.getItem('youtube')
    .then(
      data => {
        this.youtube = data;

        let msg = "Um ein YouTube Video direkt in der App zu schauen, musst du es erst erlauben.";
        let btn = "Erlauben";

        if(this.lang == 'en') {
          msg = "To watch the YouTube video directly on your app, you have to allow it first.";
          btn = "Allow";
        }

        if (data == 'true') {
          this.youtube = {'allowed': true};
        } else {
          this.youtube = {'allowed': false, 'msg': msg, 'btn': btn};
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  goBack() {
    this.activatedRoute.params.subscribe(params => {
      let path = params['articleId'].split("/");

      if (path.length > 1 || this.content.children) {
        this.router.navigate(['location', path[0]]);
      } else {
        this.router.navigate(['..']);
      }
    });
  }


  // Get Local Data
  async localGET() {
    const loading = await this.loadingController.create({
      cssClass: 'spinner',
    });
    await loading.present();

    this.activatedRoute.params.subscribe(params => {


      console.log(params);
      console.log("Hallo?!");


      let path = params['articleId'].split("/");

      this.nativeStorage.getItem('database')
      .then(
        data => {

          // If page has Children (Is Locatoin)
          if (path.length > 1) {
            data.main.forEach(element => {
              if (element.id == path[0]) {
                element.children.forEach(child => {
                  if (child.id == params.articleId) {
                    this.content = child;
                    this.template = 'article';
                    this.title = child.title;
                  }
                });
              }
            });
          } else {
            data.meta.forEach(element => {
              if (element.id == params.articleId) {
                this.content = element;
                this.template = 'default';
              }
            });

            data.main.forEach(element => {
              if (element.id == params.articleId) {
                this.content = element;
                this.template = 'default';

                if (!element.children) {
                  this.title = element.title;
                } else {
                  let title = "Geschichte";

                  if(this.lang == 'en') {
                    title = "Story";
                  }

                  this.title = title;
                }
              }
            });
          }
          loading.dismiss();
        },
        error => {
          let errTitle = "Fehler";
          let errText = "Fehler: Ups! Da ist etwas schiefgelaufen. Versuche bitte die Inhalte noch einmal herunterzuladen.";

          if(this.lang == 'en') {
            errTitle = "Error";
            errText = "Ups! Something went wrong. Please try to download the content again.";
          }

          this.content = {
            "id": "error",
            "title": errTitle,
            "template": "default",
            "content": [
                {
                    "content": {
                        "level": "h2",
                        "text": errText
                    }
                }
            ]
          };
          this.title = errTitle;

          loading.dismiss();

          console.log(error);
        }
      );

    });

  }

  // Get Rest Data
  async restGET() {
    const loading = await this.loadingController.create({
      cssClass: 'spinner',
    });
    await loading.present();

    this.activatedRoute.params.subscribe(params => {
         let path = params['articleId'].split("/");
         let url = undefined;

         if (path.length > 1) {
           url = `https://api.jankoll.de/rest/${this.lang}/article/${path[0]}/${path[path.length - 1]}`;
           this.template = 'article';
         } else {
           url = `https://api.jankoll.de/rest/${this.lang}/article/${path[path.length - 1]}`;
           this.template = 'default';
         }

         // HTTP Request
         this.http.useBasicAuth('mail@example.de', 'Raute123');

         this.http.get(url, {}, {})
         .then(data => {
            this.content = JSON.parse(data.data); // data received by server
            if (!this.content.children) {
              this.title = this.content.title;
            } else {
              let title = "Geschichte";

              if(this.lang == 'en') {
                title = "Story";
              }

              this.title = title;
            }
            loading.dismiss();
         })
         .catch(error => {
           console.log(error.status);
           console.log(error.error); // error message as string
           console.log(error.headers);
           loading.dismiss();
         });
    });
  }

  // Allow YouTube
  async allowYoutube() {
    let title = 'YouTube erlauben';
    let msg = 'Möchtest du das YouTube Video in der App schauen? Dabei werden möglicherweise Geräteinformationen an YouTube übermittelt.';
    let cancel = 'Abbrechen';
    let allow = 'Erlauben';

    if (this.lang == 'en') {
      title = 'Allow YouTube';
      msg = 'Do you want to watch the YouTube video in the app? This might send device information to YouTube.';
      cancel = 'Cancel';
      allow = 'Allow';
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
          text: allow,
          handler: () => {
            // this.nativeStorage.clear()
            //   .then(
            //     data => {
            //       console.log(data);
            //     },
            //     error => console.error(error)
            //   );

            this.nativeStorage.setItem('youtube', 'true')
              .then(
                (data) => {
                  console.log(data);
                  window.location.reload();
                },
                error => console.error('Error storing item', error)
            );
          }
        }
      ]
    });

    await alert.present();
  }

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data, so
    // that it's easier to check if the value is safe.
    let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id.split('watch?v=')[id.split('watch?v=').length - 1] + '?rel=0&showinfo=0';
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }

  saveURL(type, id: string) {
    let saveurl = 'data:' + type + ';base64,' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(saveurl);
  }

}
