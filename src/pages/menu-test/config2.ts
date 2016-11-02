import { HelloIonicPage } from '../hello-ionic/hello-ionic.page';
import { ListPage } from '../list/list.page';
import { SegmentTestPage } from '../segment-test/segment-test.page';
import { SubMenuIconPage } from './sub-menu-icon.page';
import { NgMainPage } from '../ng-content-test/ng-main.page';

import { Item } from './item';

export interface IConfig {
    WidthThreshold: number;
    Menu: Item;
}

export const Config2: IConfig =
    {
        WidthThreshold: 600,
        Menu: {
            Title: '威海海事局',
            Icon: undefined,
            Component: undefined,
            Items: [
                { Title: 'Hello Ionic', Component: HelloIonicPage, Icon: 'add', Items: undefined },
                { Title: 'My First List', Component: ListPage, Icon: 'add-circle', Items: undefined },
                {
                    Title: 'Main Menu', Component: SubMenuIconPage, Icon: 'alarm', Items: [
                        {
                            Title: 'Hello Ionic11', Component: SubMenuIconPage, Icon: 'albums', Items: [
                                {
                                    Title: 'Hello Ionic111', Component: SubMenuIconPage, Icon: 'alert', Items: [
                                        { Title: 'Hello Ionic', Component: HelloIonicPage, Icon: 'american-football', Items: undefined },
                                        { Title: 'My First List', Component: ListPage, Icon: 'analytics', Items: undefined }
                                    ]
                                },
                                { Title: 'My First List', Component: ListPage, Icon: 'aperture', Items: undefined }
                            ]
                        },
                        { Title: 'My First List11', Component: ListPage, Icon: 'apps', Items: undefined }
                    ]
                },
                { Title: 'Segment Test', Component: SegmentTestPage, Icon: 'appstore', Items: undefined },
                { Title: 'ng-content Test', Component: NgMainPage, Icon: 'add', Items: undefined }
            ]
        }
    }; 