import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
})
export class LegendComponent implements OnInit {
  data: any;

  constructor(
    private modalCtrl: ModalController,
    private nativeStorage: NativeStorage
  ) {
    this.nativeStorage.getItem('language')
    .then(
      data => {
        if (data == 'de') {
          this.data = {
            'title': 'Legende:',
            'location': 'Aktueller Standort',
            'station': 'Station',
            'parking': 'Parkplatz',
          }
        } else {
          this.data = {
            'title': 'Legend:',
            'location': 'Current location',
            'station': 'Station',
            'parking': 'Parking spot',
          }
        }
      },
      error => console.log(error)
    );
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
