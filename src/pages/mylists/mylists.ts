import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ListDetailPage} from '../listdetail/listdetail';


@Component({
  selector: 'mylists',
  templateUrl: 'mylists.html'
})
export class MyListsPage {
myLists: FirebaseListObservable<List[]>
      constructor(public navCtrl: NavController, public alertCtrl: AlertController,af: AngularFire) {
          this.myLists = af.database.list('users/0/lists');
      }
    
    createNewList() {
        let prompt = this.alertCtrl.create({
          title: 'Create New List',
            message: "Enter a name for new list of items:",
          inputs: [
            {
              name: 'listName',
              placeholder: 'My Monthly Grocery'
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Save',
              handler: data => {
                console.log('Saved clicked'+data.listName);
              }
            }
          ]
        });
        prompt.present();

    }
    
    viewList(list) {
        this.navCtrl.push(ListDetailPage, {
            list:list
        });
    }
}

export class List {
    name: string;
    id: number;
}
