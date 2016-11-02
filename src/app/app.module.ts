import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AppComponent } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic.page';
import { ItemDetailsPage } from '../pages/item-details/item-details.page';
import { ListPage } from '../pages/list/list.page';
import { MenuTestPage } from '../pages/menu-test/menu-test.page';
import { SubMenuPage } from '../pages/menu-test/sub-menu.page';
import { SegmentTestPage } from '../pages/segment-test/segment-test.page';
import { MenuIconPage } from '../pages/menu-test/menu-icon.page';
import { SubMenuIconPage } from '../pages/menu-test/sub-menu-icon.page';
import { MenuService } from '../pages/menu-test/menu.service';
// import { NgMainPage } from '../pages/ng-content-test/ng-main.page';
// import { NgContentTestPage } from '../pages/ng-content-test/ng-content-test.page';
import { NgMainPage, NgContentTestPage } from '../pages/ng-content-test';

@NgModule({
  declarations: [
    AppComponent,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MenuTestPage,
    SubMenuPage,
    SegmentTestPage,
    MenuIconPage,
    SubMenuIconPage,
    NgMainPage,
    NgContentTestPage,
  ],
  imports: [
    IonicModule.forRoot(MenuIconPage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MenuTestPage,
    SubMenuPage,
    SegmentTestPage,
    MenuIconPage,
    SubMenuIconPage,
    NgMainPage,
    NgContentTestPage
  ],
  providers: [MenuService]
})
export class AppModule { }
