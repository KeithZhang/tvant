import React from "react";
import { View, Block } from "@tarojs/components";

import "./index.less";
import useTransition from "../hooks/useTransition";

interface ITransitionProps {
  show: boolean;
  duration: any;
  name: string;
  children?: any;
  onBeforeEnter?: () => void;
  onEnter?: () => void;
  onAfterEnter?: () => void;
  onBeforeLeave?: () => void;
  onLeave?: () => void;
  onAfterLeave?: () => void;
  customStyle?: string;
  customClass?: string;
  enterClass?: string;
  enterActiveClass?: string;
  enterToClass?: string;
  leaveClass?: string;
  leaveActiveClass?: string;
  leaveToClass?: string;
}

export default function Transition(props: ITransitionProps) {
  const { customClass } = props
  const { state, onTransitionEnd } = useTransition({ props });

  return (
    <Block>
      {state.inited ? (
        <View
          className={`van-transition ${state.classes} ${customClass}`}
          style={`-webkit-transition-duration: ${
            state.currentDuration
          }ms; transition-duration: ${state.currentDuration}ms; ${
            state.display ? "" : "display: none;"
          } ${props.customStyle} `}
          onTransitionEnd={onTransitionEnd}
        >
          {props.children}
        </View>
      ) : null}
    </Block>
  );
}

Transition.defaultProps = {
  show: true,
  name: "fade",
  duration: 300
};
