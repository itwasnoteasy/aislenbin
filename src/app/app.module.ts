import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyListsPage } from '../pages/mylists/mylists';
import { FavoritePage } from '../pages/favorite/favorite';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
    apiKey: "AIzaSyBCUUK7IaGytiOyiqPzGXKJNz__6Dof0Cc",
    authDomain: "aislenbin.firebaseapp.com",
    databaseURL: "https://aislenbin.firebaseio.com",
    storageBucket: "aislenbin.appspot.com",
    messagingSenderId: "604386174666"
};

@NgModule({
  declarations: [
    MyApp,
    MyListsPage,
    FavoritePage,
    SearchPage,
    TabsPage
  ],
  imports: [
      IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyListsPage,
    FavoritePage,
    SearchPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
