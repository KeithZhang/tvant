import React from 'react';
import Taro from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import useBem from '../hooks/useBem';
import QMIcon from '../icon';

import './index.less';
export interface INavBarProps {
  title?: string;
  leftText?: string;
  rightText?: string;
  leftArrow?: boolean;
  fixed?: boolean;
  placeholder?: boolean;
  border?: boolean;
  zIndex?: number;
  safeAreaInsetTop?: boolean;
  titleClass?: string;
  customClass?: string;
  renderTitle?: () => any;
  renderLeft?: () => any;
  renderRight?: () => any;
  onClickLeft?: () => void;
  onClickRight?: () => void;
}

export default function NavBar(props: INavBarProps) {
  const {
    title = '',
    leftText = '',
    rightText = '',
    leftArrow = false,
    fixed = false,
    placeholder = false,
    border = true,
    zIndex = 1,
    safeAreaInsetTop = true,
    titleClass = '',
    customClass = '',
    renderTitle = () => '',
    renderLeft = () => '',
    renderRight = () => '',
    onClickLeft,
    onClickRight,
  } = props;

  const { statusBarHeight } = Taro.getSystemInfoSync();
  console.log('statusBarHeight...', statusBarHeight);

  const { bem } = useBem();
  return (
    <View
      className={`${bem('nav-bar', { fixed })} ${
        border ? 'van-hairline--bottom' : ''
      } ${customClass}`}
      style={`z-index: ${zIndex}; padding-top: ${
        safeAreaInsetTop ? statusBarHeight : 0
      }px;`}
    >
      <View className='van-nav-bar__left' onClick={onClickLeft}>
        {leftArrow ? (
          <QMIcon
            size='16px'
            name='iconleft'
            customClass='van-nav-bar__arrow'
          />
        ) : null}

        {leftText ? (
          <View
            className='van-nav-bar__text'
            hoverClass='van-nav-bar__text--hover'
            hoverStartTime={70}
          >
            {leftText}
          </View>
        ) : null}
        {!leftArrow && !leftText && renderLeft()}
      </View>
      <View className={`van-nav-bar__title  van-ellipsis ${titleClass}`}>
        {title ? title : renderTitle()}
      </View>
      <View className='van-nav-bar__right' onClick={onClickRight}>
        {rightText ? (
          <View
            className='van-nav-bar__text'
            hoverClass='van-nav-bar__text--hover'
            hoverStartTime={70}
          >
            {rightText}
          </View>
        ) : (
          renderRight()
        )}
      </View>
    </View>
  );
}
