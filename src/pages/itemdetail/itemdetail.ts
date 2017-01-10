import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'itemdetail.html'
})
export class ItemDetailPage {

    item: any;
    
    constructor(public navCtrl: NavController, public params: NavParams) {
        this.item = params.get('item');
    }

}