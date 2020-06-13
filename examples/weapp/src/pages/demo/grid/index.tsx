import React from 'react';
import { View } from '@tarojs/components';
import Grid from '@ui-base/grid';

import './index.less';

export default function GridDemo() {
  let getItems = () => {
    return [
      {
        icon: 'photo_o',
        text: '文字',
      },
      {
        icon: 'photo_o',
        text: '文字',
      },
      {
        icon: 'photo_o',
        text: '文字',
      },
      {
        icon: 'photo_o',
        text: '文字',
      },
      {
        icon: 'photo_o',
        text: '文字',
      },
      {
        icon: 'photo_o',
        text: '文字',
      },
      {
        icon: 'photo_o',
        text: '文字',
      },
    ];
  };
  return (
    <View style={{ backgroundColor: '#f0f3f6', height: '100vh' }}>
      <View>默认4格</View>
      <Grid items={getItems()} />

      <View>自定义格数columnName 6</View>
      <Grid
        columnName={6}
        items={[
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
        ]}
      />

      <View>自定义边距 gutter 10</View>
      <Grid
        gutter={10}
        items={[
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
          {
            icon: 'photo_o',
            text: '文字',
          },
        ]}
      />
    </View>
  );
}
