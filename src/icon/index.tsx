import React from 'react';
import { View, Image } from '@tarojs/components';

import Info from '../info';
import './index.less';
import { addUnit } from '@ui-base/util';

interface IIconProps {
  name: string;
  dot?: boolean;
  info?: string | number;
  color?: string;
  size?: string | number;
  customStyle?: string;
  classPrefix?: string;
  customClass?: string;
  onClick?: () => void;
}

export default function QMIcon(props: IIconProps) {
  const {
    name,
    dot = false,
    color = '',
    size = null,
    info = '',
    classPrefix = 'van-icon',
    customStyle = '',
    customClass = '',
    onClick = () => '',
  } = props;

  // console.log('qm icon...', props);
  const isImageName = name.indexOf('/') !== -1;
  return (
    <View
      className={`${classPrefix} ${
        isImageName ? 'van-icon--image' : name
      } ${customClass}`}
      style={`color: ${color}; font-size: ${addUnit(size)}; ${customStyle}`}
      onClick={onClick}
    >
      {info !== null || dot ? (
        <Info customClass='van-icon__info' dot={dot} info={info}></Info>
      ) : null}
      {isImageName ? (
        <Image src={name} mode='aspectFit' className='van-icon__image' />
      ) : null}
    </View>
  );
}
