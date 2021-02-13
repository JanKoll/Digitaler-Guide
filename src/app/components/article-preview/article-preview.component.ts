import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent {
  @Input() data: any;

  constructor(
    private modalCtrl: ModalController,
    private router: Router

  ) {}

  async close() {
    await this.modalCtrl.dismiss();
  }

  route(id) {
    this.router.navigate(['/article/', id]);
    this.modalCtrl.dismiss();
  }
}
