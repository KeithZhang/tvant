import React, { useRef, useEffect, createRef } from 'react';
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components';
import QMButton from '@ui-base/button';
import QMToast from '@ui-base/toast';

import './index.less';
import DemoBlock from '../components/demo-block';
import NavBar from '@ui-base/nav-bar';

export default function ToastDemo() {
  const toastRef = useRef<any>({});
  const showToast = () => {
    // Toast('提示内容');
    toastRef.current.Toast( '提示内容');
  };

  const showLongToast = () => {
    // Toast('这是一条长文字提示，超过一定字数就会换行');
    toastRef.current.Toast({message: '这是一条长文字提示，超过一定字数就会换行', duration: 0});
  };

  const showLoadingToast = () => {
    // Toast.loading({ mask: true, message: '加载中...' });
    toastRef.current.Toast.loading({ mask: true, message: '加载中...' });
  };

  const showSuccessToast = () => {
    // Toast.success('成功文案');
    toastRef.current.Toast.success('成功文案');
  };

  const showFailToast = () => {
    // Toast.fail('失败提示');
    toastRef.current.Toast.fail('失败提示');
  };

  const showCustomizedToast = (duration) => {
    const text = (second) => `倒计时 ${second} 秒`;
    const toast = toastRef.current.Toast.loading({
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner',
      message: text(3),
    });

    let second = 3;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toastRef.current.Toast.loading({
          duration: 0,
          forbidClick: true,
          loadingType: 'spinner',
          message: text(second),
        });
      } else {
        clearInterval(timer);
        toastRef.current.Toast.clear();
      }
    }, 1000);
  };

  return (
    <View>
      <NavBar leftArrow leftText="返回" onClickLeft={() => {
          console.log('onClickLeft...');
          Taro.navigateBack()
        }}/>
      <DemoBlock title='文字提示' padding>
        <QMButton onClick={showToast} className='demo-margin-right'>
          文字提示
        </QMButton>
        <QMButton onClick={showLongToast}>长文字提示</QMButton>
      </DemoBlock>

      <DemoBlock title='加载提示' padding>
        <QMButton onClick={showLoadingToast}>加载提示</QMButton>
      </DemoBlock>

      <DemoBlock title='成功/失败提示' padding>
        <QMButton onClick={showSuccessToast} className='demo-margin-right'>
          成功提示
        </QMButton>
        <QMButton onClick={showFailToast}>失败提示</QMButton>
      </DemoBlock>

      <DemoBlock title='高级用法' padding>
        <QMButton onClick={showCustomizedToast}>高级用法</QMButton>
      </DemoBlock>

      <QMToast ref={toastRef} />
    </View>
  );
}
