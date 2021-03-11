import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent {
  @Input() data: any;
  more: any;

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private nativeStorage: NativeStorage
  ) {
    this.nativeStorage.getItem('language')
    .then(
      data => {
        if (data == 'de') {
          this.more = 'Mehr erfahren'
        } else {
          this.more = 'Read more'
        }
      },
      error => console.log(error)
    );
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  route(id) {
    this.router.navigate(['/article/', id]);
    this.modalCtrl.dismiss();
  }
}
