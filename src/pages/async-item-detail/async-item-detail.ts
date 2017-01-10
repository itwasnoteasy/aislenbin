import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AsyncItemDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'async-item-detail.html'
})
export class AsyncItemDetailPage {
    item: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
      this.item = params.get('item');
  }

}
