import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'ng-main.page.html'
})
export class NgMainPage implements OnInit {
    constructor(public Nav: NavController) { }

    ngOnInit() { }
    GoBack() {
        this.Nav.pop();
    }
}