import React, { useState } from 'react';
import { View } from '@tarojs/components';

import './index.less';
import DemoBlock from '../components/demo-block';
import Tabbar from '@ui-base/tabbar';
import TabbarOnly from '@ui-base/tabbar-only';
import TabbarItemOnly from '@ui-base/tabbar-item-only';

export default function TabbarDemo() {
  const [state, setState] = useState({
    active1: 'home',
    active2: 'home',
    active3: 'home',
    active4: 'home',
  });

  console.log('state...', state);

  return (
    <View>
      <DemoBlock title='TabbarOnly基本用法'>
        <TabbarOnly
          active={state.active1}
          custom-class={'tabbar'}
          onChange={(active: string) => {
            setState((preState) => ({ ...preState, active1: active }));
          }}
          safeAreaInsetBottom={false}
        >
          <TabbarItemOnly icon='like_o' name={'home'}>
            首页
          </TabbarItemOnly>
          <TabbarItemOnly icon='star_o' name={'mine'}>
            我的
          </TabbarItemOnly>
        </TabbarOnly>
      </DemoBlock>

      <DemoBlock title='TabbarOnly显示徽标、定制颜色'>
        <TabbarOnly
          active={state.active2}
          custom-class={'tabbar'}
          activeColor='#07c160'
          inactiveColor='#000'
          onChange={(active: string) => {
            setState((preState) => ({ ...preState, active2: active }));
          }}
          safeAreaInsetBottom={false}
        >
          <TabbarItemOnly icon='like_o' name={'home'} dot>
            首页
          </TabbarItemOnly>
          <TabbarItemOnly icon='star_o' name={'mine'} info='20'>
            我的
          </TabbarItemOnly>
        </TabbarOnly>
      </DemoBlock>

      <DemoBlock title='Tabbar基本用法'>
        <Tabbar
          items={[
            {
              name: 'home',
              icon: 'like_o',
              text: '首页',
            },
            {
              name: 'mine',
              icon: 'like_o',
              text: '我的',
            },
          ]}
          active={state.active3}
          custom-class={'tabbar'}
          onChange={(active: string) => {
            setState((preState) => ({ ...preState, active3: active }));
          }}
          safeAreaInsetBottom={false}
        />
      </DemoBlock>

      <DemoBlock title='Tabbar显示徽标、定制颜色'>
        <Tabbar
          items={[
            {
              name: 'home',
              icon: 'like_o',
              text: '首页',
              dot: true,
            },
            {
              name: 'mine',
              icon: 'like_o',
              text: '我的',
              info: '5',
            },
          ]}
          active={state.active4}
          custom-class={'tabbar'}
          activeColor='#07c160'
          inactiveColor='#000'
          onChange={(active: string) => {
            setState((preState) => ({ ...preState, active4: active }));
          }}
          safeAreaInsetBottom={false}
        />
      </DemoBlock>
    </View>
  );
}

TabbarDemo.config = {
  usingComponents: {
    'tabbar-only': 'plugin://qm-ui/ui-tabbar-only',
    'tabbar-item-only': 'plugin://qm-ui/ui-tabbar-item-only',
    tabbar: 'plugin://qm-ui/ui-tabbar',
  },
};
