import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';

import './index.less';
import { setTabBarStyle } from '@tarojs/taro';

interface IRowProps {
  children?: any;
  gutter?: string | number;
}

export const RowContext = React.createContext({});

export default function Row(props: IRowProps) {
  const { gutter } = props;
  const [cols, setCols] = useState([]);
  const [style, setStyle] = useState('');
  //  const colsRef = useRef({id: Math.random(), data: []})

  const appendCol = (colId) => {
    console.log('col...', colId);
    //  colsRef.current.data = colsRef.current.data.concat(col)

    setCols((preCols) => preCols.concat(colId));

    //  console.log('addCol colsRef...', colsRef)
  };

  const removeCol = (colId) => {
    setCols((preCols) => preCols.filter((v) => v !== colId));
  };

  console.log('cols...', cols);

  useEffect(() => {
    const margin = `-${Number(gutter) / 2}px`;
    const style = gutter
      ? `margin-right: ${margin}; margin-left: ${margin};`
      : '';
    setStyle(style);
  }, [gutter]);

  return (
    <RowContext.Provider value={{ gutter, appendCol, removeCol }}>
      <View className='custom-class van-row' style={style}>
        {props.children}
      </View>
    </RowContext.Provider>
  );
}
