import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Item } from './item';

@Component({
    templateUrl: 'sub-menu.page.html'
})
export class SubMenuPage {
    menus: Item[];
    loading: Loading;
    constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
        console.log(navParams.data);
        this.menus = navParams.data;
    }
    openPage(page) {
        // this.loadingDefault();
        this.loadingDuration();
        this.navCtrl.push(page.Component, page.Items);
    }
    loadingDefault() {
        this.loading = this.loadingCtrl.create({ content: 'Please wait...' });
        this.loading.present();
        setTimeout(() => {
            this.loading.dismiss();
        }, 1000);
    }
    loadingDuration() {
        this.loading = this.loadingCtrl.create({
            content: 'please wait',
            duration: 1000
            // showBackdrop: false//false背景不蒙上一层灰色，表示disable
            // spinner: 'hide'//hide不显示动画，默认显示
        });
        this.loading.present();
    }
    doRefresh(refresher) {
        console.log('begin refresh');
        setTimeout(() => {
            console.log('end refresh');
            refresher.complete();
        }, 2000);
    }
}