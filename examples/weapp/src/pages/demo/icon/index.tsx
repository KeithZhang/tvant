import React, { useState } from 'react';
import { View, Button } from '@tarojs/components';
import { ComponentOptions } from '@tarojs/taro';

import QMIcon from '@ui-base/icon';

import './index.less';
import configData from './config';

export default function IconDemo() {
  const [state, setState] = useState({
    active: 0,
  });

  const switchActive = (index) => {
    setState({
      active: index,
    });
  };

  const currentType = ['basic', 'outline', 'filled', 'case'];
  const icons = configData[currentType[state.active]];

  return (
    <View className='vbox'>
      <View className='hbox'>
        <Button
          size='mini'
          style={state.active == 0 ? 'background-color: #3d85cc' : ''}
          className='btn'
          onClick={() => {
            switchActive(0);
          }}
        >
          基础图标
        </Button>
        <Button
          size='mini'
          style={state.active == 3 ? 'background-color: #3d85cc' : ''}
          className='btn'
          onClick={() => {
            switchActive(3);
          }}
        >
          用法示例
        </Button>
      </View>
      <View className='wbox_center'>
        {icons &&
          icons.map((v, i) => (
            <View className={`vbox_center icon_container`} key={v + i}>
              <QMIcon custom-class='icon' size='26px' name={v} />
              <View className='font_13'>{v}</View>
            </View>
          ))}
      </View>
      {state.active == 3 ? (
        <View className='wbox_center'>
          <View className={`vbox_center icon_container`}>
            <QMIcon custom-class='icon' dot size='26px' name='iconexchange' />
            <View className={`font_13 text`}>location-o</View>
          </View>
          <View className={`vbox_center icon_container`}>
            <QMIcon
              custom-class='icon'
              info='9+'
              size='26px'
              name='iconexchange'
            />
            <View className={`font_13 text`}>location-o</View>
          </View>
        </View>
      ) : null}
    </View>
  );
}

IconDemo.options = {
  addGlobalClass: true,
} as ComponentOptions;
