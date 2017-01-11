import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ItemDetailPage} from '../itemdetail/itemdetail';

@Component({
  templateUrl: 'listdetail.html'
})
export class ListDetailPage {

    listItems: FirebaseListObservable<any[]>
    filteredItems: Array<any>;
    list: any;
    af: AngularFire;
    
    constructor(public navCtrl: NavController, public params: NavParams, af: AngularFire) {
        this.list = params.get('list');
        this.af = af;
    
    }
    
    ngOnInit() {
            this.listItems = this.af.database.list('users/0/lists/'+this.list.id+'/items');
            this.listItems.subscribe((_items)=> {
                this.filteredItems = [];
                _items.forEach(item => {
                    console.log('stores/'+this.list.storeId+'/items/'+item.id);
                    this.af.database.object('stores/'+this.list.storeId+'/items/'+item.id).subscribe((_item) => {
                       this.filteredItems.push(_item);
                    });
                
                })
            }); 

        console.log(this.filteredItems);
    }
    
    viewItemDetail(item) {
        this.navCtrl.push(ItemDetailPage, {
            item:item
        });
    }
    
}