import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ItemDetailPage} from '../itemdetail/itemdetail';

@Component({
  templateUrl: 'listdetail.html'
})
export class ListDetailPage {

    listItems: Array<any>;
    filteredItems: Array<any>;
    list: any;
    af: AngularFire;
    sortBy: string;
    
    constructor(public navCtrl: NavController, public params: NavParams, af: AngularFire) {
        this.list = params.get('list');
        this.af = af;
        this.sortBy = 'Aisle';
    
    }
    
    ngOnInit() {
    this.af.database.list('users/0/lists/'+this.list.id+'/items').subscribe((_itemIds) => {
        this.listItems = _itemIds;
        });
        
this.filteredItems = [];
            
                this.listItems.forEach(item => {
    this.af.database.object('stores/'+this.list.storeId+'/items/'+item.id).subscribe((_item) => {
                       this.filteredItems.push(_item);
                    });
                
                });
    
        this.sortFilteredItems();
    }
    
    viewItemDetail(item) {
        this.navCtrl.push(ItemDetailPage, {
            item:item
        });
    }
    
    toggleSort() {
        if(this.sortBy == 'Aisle') {
            this.sortBy = 'Item';
        } else {
            this.sortBy = 'Aisle';
        }
        this.sortFilteredItems();
    }
    
    sortFilteredItems() {
        if(this.sortBy == 'Aisle') {
            this.filteredItems = this.filteredItems.sort(function(a, b) {
            return parseInt(a.aisle) - parseInt(b.aisle);
            });
        } else {
            this.filteredItems = this.filteredItems.sort(function(a, b) {
                if(a.name > b.name) return 1;
                else return 0;
            });
        }
    }
    
}