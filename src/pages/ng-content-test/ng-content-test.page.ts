import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'test-content',
    templateUrl: 'ng-content-test.page.html'
})
export class NgContentTestPage implements OnInit {
    Datas: string[] = [];
    constructor() { }

    ngOnInit() { }


    AddValue(val: string) {
        if (val)
            this.Datas.push(val);
    }
}