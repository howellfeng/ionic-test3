import { Injectable } from '@angular/core';

import { Item } from './item';
import { Config2 } from './config2';

@Injectable()
export class MenuService {
    private _colCount: number = 3;
    private _widthThreshold: number;
    constructor() {
        this._widthThreshold = Config2.WidthThreshold;
    }
    Grouping(items: Item[], group: Item[][]) {
        let rowCount: number = Math.ceil(items.length / this._colCount);
        for (let i = 0; i < rowCount; i++) {
            let start = i * this._colCount;
            let end = start + 3;
            if (end > items.length)
                end = items.length;
            group.push(items.slice(start, end));
        }
    }
}