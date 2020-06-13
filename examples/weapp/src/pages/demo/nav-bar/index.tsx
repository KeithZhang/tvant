import React from 'react';
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components';
import NavBar from '@ui-base/nav-bar';

export default function NavBarDemo() {

  return (
    <View>
      <NavBar
        leftText='返回'
        rightText='按钮'
        leftArrow
        renderTitle={() => <View>hello</View>}
        onClickLeft={() => {
          console.log('onClickLeft...');
          Taro.navigateBack()
        }}
        onClickRight={() => {
          console.log('onClickRight...');
        }}
      ></NavBar>
    </View>
  );
}

