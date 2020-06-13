import React from 'react';
import { View, Block } from '@tarojs/components';

import './index.less';

interface ICellGroupProps {
  title?: string;
  border?: boolean;
  children?: any;
}

export default function CellGroup(props: ICellGroupProps) {
  const { title, border = true, children } = props;
  return (
    <Block>
      {title ? <View className='van-cell-group__title'>{title}</View> : null}
      <View className={`custom-class van-cell-group ${ border ? 'van-hairline--top-bottom' : '' }`}>
        {children}
      </View>
    </Block>
  );
}
