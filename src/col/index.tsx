import React, { useContext, useEffect, useState } from "react";
import { View } from "@tarojs/components";

import './index.less'
import { RowContext } from "../row";
import useBem from "@ui-base/hooks/useBem";

interface IColProps {
  children?: any;
  span?: string | number;
  offset?: string | number;
  customClass?: string;
}

const Col = (props: IColProps) => {
  const { span, offset, customClass } = props

  const { bem} = useBem()
  const [state, setState] = useState({
    style: ''
  })
  const { gutter, appendCol, removeCol } = useContext(RowContext)
  // console.log('addCol...', addCol)
  const colId = Math.random();
  useEffect(() => {
    console.log('col useEffect...')
    appendCol(colId)
    return () => {
      console.log('remove...')
      removeCol(colId)
    }
  }, [props])

  useEffect(() => {
    const padding = `${gutter / 2}px`;
    const style = gutter ? `padding-left: ${padding}; padding-right: ${padding};` : '';
    if (style !== state.style) {
      setState({
        style
      })
    }
  }, [gutter])
  
  return (
    <View  
      className={`${bem('col', [span]) } ${ offset ? 'van-col--offset-' + offset : '' } ${customClass}`}
      style={ state.style }>
      {props.children}
    </View>
  )
}

export default Col