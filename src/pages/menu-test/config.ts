import { HelloIonicPage } from '../hello-ionic/hello-ionic.page';
import { ListPage } from '../list/list.page';
import { SubMenuPage } from './sub-menu.page';
import { SegmentTestPage } from '../segment-test/segment-test.page';

export const Config = {
    Items: [
        { Title: 'Hello Ionic', Component: HelloIonicPage, Icon: 'add' },
        { Title: 'My First List', Component: ListPage, Icon: 'add-circle' },
        {
            Title: 'Main Menu', Component: SubMenuPage, Icon: 'alarm', Items: [
                {
                    Title: 'Hello Ionic11', Component: SubMenuPage, Icon: 'albums', Items: [
                        {
                            Title: 'Hello Ionic111', Component: SubMenuPage, Icon: 'alert', Items: [
                                { Title: 'Hello Ionic', Component: HelloIonicPage, Icon: 'american-football' },
                                { Title: 'My First List', Component: ListPage, Icon: 'analytics' }
                            ]
                        },
                        { Title: 'My First List', Component: ListPage, Icon: 'aperture' }
                    ]
                },
                { Title: 'My First List11', Component: ListPage, Icon: 'apps' }
            ]
        },
        { Title: 'Segment Test', Component: SegmentTestPage, Icon: 'appstore' }
    ]
};