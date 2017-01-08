import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchPage {
    stores: FirebaseListObservable<any>;
    
    constructor(public navCtrl: NavController, af: AngularFire) {
        this.stores = af.database.list('stores/0/items');
    }
    
    getItems(ev) {
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
//        if (val && val.trim() != '') {
//            this.stores = this.stores.filter((item) => {
//                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//            })
//        }
    }

}
