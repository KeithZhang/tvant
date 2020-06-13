import React from "react";
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components";
import NavBar from "@ui-base/nav-bar";

export default function PageContainer(props) {
  return (
    <View>
      <NavBar leftArrow leftText="返回" onClickLeft={() => {
          console.log('onClickLeft...');
          Taro.navigateBack()
        }}/>
      {props.children}
    </View>
  )
}