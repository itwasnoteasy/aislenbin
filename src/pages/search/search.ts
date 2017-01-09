import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchPage {
    items: FirebaseListObservable<Item[]>;
    filteredItems: Array<Item>;
    
    constructor(public navCtrl: NavController, af: AngularFire) {
        
        this.items = af.database.list('stores/0/items');
    }
    
    /*
    ngOnInit(){
      this.jobs = this.af.database.list("/jobs/", {query: {orderByChild : "companyKey", equalTo:someKey}})
   }
    */
    
    getFilteredItems(ev) {
        console.log(ev.target.value);
        // use subscribe and foreach for filtering
        var val = ev.target.value;
if(val === undefined || val === null) {
    val = '';
}
        this.items.subscribe((_items)=> {
            this.filteredItems = [];
            _items.forEach(item => {
                var _srchText = item.srchTxt;
                if(_srchText === undefined) {
                    _srchText = item.name;
                }
                if(_srchText.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    this.filteredItems.push(item);
                } 
            })
        });        
    }

}

export class Item {
    name: string;
    aisle: number;
    bin: number;
    notes: string;
    srchTxt: string;
    thumbnail: string;
}
