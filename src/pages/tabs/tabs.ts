import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { FavoritePage } from '../favorite/favorite';
import { MyListsPage } from '../mylists/mylists';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SearchPage;
  tab2Root: any = FavoritePage;
  tab3Root: any = MyListsPage;

  constructor() {

  }
}
