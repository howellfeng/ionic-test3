import { Component } from '@angular/core';
import { FabContainer } from 'ionic-angular';

import * as moment from 'moment'


@Component({
  templateUrl: 'hello-ionic.page.html'
})
export class HelloIonicPage {
  Time: string;
  constructor() {
    let now = Date.now();
    this.Time = moment(now).format('YYYY-MM-DD HH:mm:ss');
  }
  Click(name: string, fab: FabContainer) {
    fab.close();
    console.log(name);
  }
  Click2(name: string, fab1: FabContainer, fab2: FabContainer) {
    fab1.close();
    fab2.close();
    console.log(name);
  }
  Click3(name: string) {
    console.log(name);
  }
}
