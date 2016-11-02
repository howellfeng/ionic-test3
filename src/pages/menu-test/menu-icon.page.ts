import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Config2 } from './config2';
import { SubMenuIconPage } from './sub-menu-icon.page';

@Component({
    templateUrl: 'menu-icon.page.html'
})
export class MenuIconPage implements OnInit {
    RootPage: any;
    Menu: any = Config2.Menu;
    constructor(private _platform: Platform) {
        this.RootPage = SubMenuIconPage;
        this._platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }

    ngOnInit() {
    }
}