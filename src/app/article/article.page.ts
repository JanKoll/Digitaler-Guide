import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public navCtrl: NavController,
    private http: HTTP,
    private nativeStorage: NativeStorage
  ) {
    // Check for Offline Mode
    this.nativeStorage.getItem('isOffline')
    .then(
      data => {
        this.localGET();
      },
      error => this.restGET()
    );
  }


  // Get Local Data
  localGET() {
    this.activatedRoute.params.subscribe(params => {

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
                this.title = element.title;
                console.log(element);

              }
            });
          }
        },
        error => {
          this.content = {
            "id": "error",
            "title": "Fehler",
            "template": "default",
            "content": [
                {
                    "content": {
                        "level": "h2",
                        "text": "Fehler: Ups! Da ist etwas schiefgelaufen. Versuche bitte die Inhalte noch einmal herunterzuladen."
                    }
                }
            ]
          };
          this.title = "Fehler";

          console.log(error);
        }
      );

    });

  }

  // Get Rest Data
  restGET() {
    this.activatedRoute.params.subscribe(params => {
         let path = params['articleId'].split("/");
         let url = undefined;

         if (path.length > 1) {
           url = `https://api.jankoll.de/rest/article/${path[0]}/${path[path.length - 1]}`;
           this.template = 'article';
         } else {
           url = `https://api.jankoll.de/rest/article/${path[path.length - 1]}`;
           this.template = 'default';
         }

         // HTTP Request
         this.http.useBasicAuth('mail@example.de', 'Raute123');

         this.http.get(url, {}, {})
         .then(data => {
            this.content = JSON.parse(data.data); // data received by server
            this.title = this.content.title;
         })
         .catch(error => {
           console.log(error.status);
           console.log(error.error); // error message as string
           console.log(error.headers);
         });
    });
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
