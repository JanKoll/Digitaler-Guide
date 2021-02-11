import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent implements OnInit {
  @Input() data: any;


  constructor(private modalCtrl: ModalController, private router: Router) {}

  async close() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
    console.log(this.data.id);
  }

  route(id) {
    this.router.navigate(['/article/', id]);
    this.modalCtrl.dismiss();
  }
}
