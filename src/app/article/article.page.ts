import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  locationId: any;
  articleId: any;
  content: any;
  title: any;
  template: any;

  constructor(
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public navCtrl: NavController,
    private http: HTTP
  ) {


    this.route.params.subscribe(params => {
         let path = params['articleId'].split("/");
         let url = undefined;

         if (path.length > 1) {
           url = `http://localhost:8000/rest/pages/${path[0]}+${path[path.length - 1]}`;

         } else {
           url = `http://localhost:8000/rest/pages/${path[path.length - 1]}`;
         }

         // HTTP Request
         this.http.useBasicAuth('mail@example.de', 'Raute123');

         this.http.get(url, {}, {})
         .then(data => {
           this.content = JSON.parse(data.data).data.content; // data received by server
           this.title = this.content.title;

           this.template = JSON.parse(data.data).data.template;

         })
         .catch(error => {
           console.log(error.status);
           console.log(error.error); // error message as string
           console.log(error.headers);
         });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
         let path = params['articleId'].split('/');
         console.log(path);

         this.articleId = path[path.length - 1];

         if (path.length > 1) {
           this.locationId = path[0];
         }

         console.log(this.articleId);
         console.log(this.locationId);
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

}
