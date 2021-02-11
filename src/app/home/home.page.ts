import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HTTP } from '@ionic-native/http/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  route: Router;

  content: [];

  constructor(
    private http: HTTP,
    private iab: InAppBrowser
  ) {
    // REST Authentication
    this.http.useBasicAuth('mail@example.de', 'Raute123');

    this.http.get('http://localhost:8000/rest/main', {}, {})
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

  createInAppBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'toolbarposition=top,hideurlbar=yes');
  }
}
