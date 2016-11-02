import { Component, OnInit } from '@angular/core';

//在templateUrl上增加注释，编译出现SegmentTestPage缺少template错误。
@Component({
    templateUrl: 'segment-test.page.html'
})
export class SegmentTestPage implements OnInit {
    RuleType: string = 'Berth';//RuleType在选中后才会改变，在选中时还是之前ion-segment-button的value
    _ruleTypeValue: { [type: string]: string[] } = {};
    Values: string[] = [];
    constructor() { }

    ngOnInit() {
        this._ruleTypeValue['Berth'] = ['Berth1', 'Berth2'];
        this._ruleTypeValue['First'] = ['First1', 'First2'];
        this._ruleTypeValue['Second'] = ['Second1', 'Second2'];
        this._ruleTypeValue['Third'] = ['Third1', 'Third2'];
        this.Values = this._ruleTypeValue[this.RuleType];
    }
    Selected(ruleType: string) {
        if (ruleType)
            this.Values = this._ruleTypeValue[ruleType];
        else
            this.Values = [];
    }
}