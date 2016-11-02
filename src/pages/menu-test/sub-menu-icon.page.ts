// import { Component, OnInit, Renderer } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Item } from './item';
import { MenuService } from './menu.service';

@Component({
    templateUrl: 'sub-menu-icon.page.html'
})
export class SubMenuIconPage implements OnInit {
    Groups: Item[][] = [];
    CurrentItem: Item;
    constructor(public Nav: NavController, private _navParam: NavParams, private _menuService: MenuService) {
        this.CurrentItem = this._navParam.data;
        this._menuService.Grouping(this.CurrentItem.Items, this.Groups);
    }
    OpenPage(item: Item) {
        this.Nav.push(item.Component, item);
    }
    GoBack() {
        this.Nav.pop();
    }
    ngOnInit() { }
}