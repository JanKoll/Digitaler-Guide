import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  articleId: any;
  result: [];

  constructor(
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public navCtrl: NavController
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
         this.articleId = params['articleId'];
    });

    fetch('./assets/data/location.json').then(res => res.json())
    .then(json => {
      let data = json;
      this.result = data.find(data => data.name === this.articleId);
    });
  }

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data, so
    // that it's easier to check if the value is safe.
    let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0';
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }

}
