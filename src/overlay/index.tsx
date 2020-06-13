import React from "react";
import Transition from "../transition";

import "./index.less";
import { View } from "@tarojs/components";

interface IOverlayProps {
  show?: boolean;
  children?: any;
  zIndex?: number;
  customStyle?: string;
  customOverlayStyle?: string;
  duration?: string | number;
  onClick?: () => void;
}

export default function Overlay(props: IOverlayProps) {
  return (
    <Transition
      show={props.show}
      duration={props.duration}
      customStyle={`${props.customStyle}`}>
      <View onClick={props.onClick} className='van-overlay' style={`z-index: ${props.zIndex}; ${props.customOverlayStyle}`}>
        {props.children}
      </View>
    </Transition>
  );
}

Overlay.defaultProps = {
  show: false,
  zIndex: 1,
  duration: 300,
  onClick: () => {}
};
