import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';

import './index.less';
import Row from '@ui-base/row';
import Col from '@ui-base/col';
import DemoBlock from '../components/demo-block';
import QMImage from '@ui-base/image';
import QMLoading from '@ui-base/loading';
import NavBar from '@ui-base/nav-bar';

export default function ImageDemo() {
  const fits: Array<'contain' | 'cover' | 'fill' | 'none'> = [
    'contain',
    'cover',
    'fill',
    'none',
  ];
  const src = 'https://img.yzcdn.cn/vant/cat.jpeg';

  return (
    <View>
      <NavBar leftArrow onClickLeft={() => {
          console.log('onClickLeft...');
          Taro.navigateBack()
        }}/>
      <DemoBlock title='基础用法' padding>
        <Row>
          <QMImage width='100' height='100' src={src} />
        </Row>
      </DemoBlock>

      <DemoBlock title='填充模式' padding>
        <Row gutter='20'>
          {fits.map((fit) => (
            <Col key={fit} span={8}>
              <QMImage fit={fit} width='100%' height='27vw' src={src} />
              <View className='text'>{fit}</View>
            </Col>
          ))}
        </Row>
      </DemoBlock>

      <DemoBlock title='圆形图片' padding>
        <Row gutter='20'>
          {fits.map((fit) => (
            <Col key={fit} span={8}>
              <QMImage round fit={fit} width='100%' height='27vw' src={src} />
              <View className='text'>{fit}</View>
            </Col>
          ))}
        </Row>
      </DemoBlock>

      <DemoBlock title='加载中提示' padding>
        <Row gutter='20'>
          <Col span='8'>
            <QMImage width='100%' height='27vw' />
            <View className='text'>默认提示</View>
          </Col>

          <Col span='8'>
            <QMImage
              width='100%'
              height='27vw'
              useLoadingSlot
              renderLoading={() => (
                <QMLoading type='spinner' size='20' vertical />
              )}
            />
            <View className='text'>自定义提示</View>
          </Col>
        </Row>
      </DemoBlock>

      <DemoBlock title='加载失败提示' padding>
        <Row gutter='20'>
          <Col span='8'>
            <QMImage width='100%' height='27vw' src="x"/>
            <View className='text'>默认提示</View>
          </Col>

          <Col span='8'>
            <QMImage
              width='100%'
              height='27vw'
              src="x"
              useErrorSlot
              renderError={() => (
                <Text>加载失败</Text>
              )}
            />
            <View className='text'>自定义提示</View>
          </Col>
        </Row>
      </DemoBlock>
    </View>
  );
}
