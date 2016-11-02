import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Config } from './config';
import { SubMenuPage } from './sub-menu.page';

@Component({
    templateUrl: 'menu-test.page.html'
})
export class MenuTestPage {
    rootPage: any;
    menus: any = Config.Items;
    constructor(public platform: Platform) {
        this.initializeApp();
    }
    initializeApp() {
        this.rootPage = SubMenuPage;
        this.platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }
}