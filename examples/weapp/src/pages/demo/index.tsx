import React, { useState, useRef } from 'react';
import Taro, { usePageScroll } from '@tarojs/taro'
import { View, Button } from '@tarojs/components';
import NavBar from '@ui-base/nav-bar';

const componentList = [
  { title: 'cell', path: '/pages/demo/cell/index' },
  { title: 'field', path: '/pages/demo/field/index' },
  { title: 'toast', path: '/pages/demo/toast/index' },
  { title: 'image', path: '/pages/demo/image/index' },
  { title: 'action-sheet', path: '/pages/demo/action-sheet/index' },
  { title: 'grid', path: '/pages/demo/grid/index' },
  { title: 'overlay', path: '/pages/demo/overlay/index' },
  { title: 'transition', path: '/pages/demo/transition/index' },
  { title: 'popup', path: '/pages/demo/popup/index' },
  { title: 'icon', path: '/pages/demo/icon/index' },
  { title: 'tabbar', path: '/pages/demo/tabbar/index' },
  { title: 'loading', path: '/pages/demo/loading/index' },
  { title: 'button', path: '/pages/demo/button/index' },
  { title: 'sticky', path: '/pages/demo/sticky/index' },
  { title: 'tabs', path: '/pages/demo/tabs/index' },
  { title: 'nav-bar', path: '/pages/demo/nav-bar/index' },
  { title: 'tag', path: '/pages/demo/tag/index' },
  { title: 'layout', path: '/pages/demo/layout/index' },
];

export default function Demo() {
  return (
    <View>
      <NavBar 
        leftArrow 
        leftText="返回"
        onClickLeft={() => {
          console.log('onClickLeft...');
          Taro.navigateBack()
        }}/>
      {componentList.map((v, i) => (
        <Button
          key={v.title + i}
          onClick={() => {
            Taro.navigateTo({
              url: v.path,
            });
          }}
        >
          {v.title}
        </Button>
      ))}
    </View>
  );
}
