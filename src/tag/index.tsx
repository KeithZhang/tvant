import React from 'react';
import { View } from '@tarojs/components';

import './index.less';
import useBem from '../hooks/useBem';
import QMIcon from '@ui-base/icon';

interface ITagProps {
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  size?: 'large' | 'medium';
  color?: string;
  plain?: boolean;
  round?: boolean;
  mark?: boolean;
  textColor?: string;
  closeable?: boolean;
  children?: any;
  onClose?: any;
  customClass?: string;
}

export default function Tag(props: ITagProps) {
  const {
    type = 'default',
    size,
    color,
    plain = false,
    round = false,
    mark = false,
    textColor,
    closeable = false,
    children,
    onClose,
    customClass
  } = props;

  console.log('closeable...', closeable)
  console.log('color...', color)
  const { bem } = useBem();

  return (
    <View
      className={`${bem('tag', [type, size, { mark, plain, round }])} ${
        plain ? 'van-hairline--surround' : ''
      }  ${customClass}`}
      style={`${color && !plain ? 'background-color: ' + color + ';' : ''} ${
        textColor || (color && plain) ? 'color: ' + (textColor || color) : ''
      } `}
    >
      {children}
      {closeable ? (
        <QMIcon name='iconguanbi' custom-class='van-tag__close' onClick={onClose} />
      ) : null}
    </View>
  );
}
