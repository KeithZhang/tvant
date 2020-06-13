import React from "react";
import { View, Block } from "@tarojs/components";

import "./index.less";
import useBem from "../hooks/useBem";

interface IInfoProps {
  dot?: boolean;
  info?: string | number;
  customStyle?: string;
  customClass?: string;
}

export default function Info(props: IInfoProps) {
  const { customClass = ''} = props
  
  const { bem } = useBem();
  return (
    <Block>
      {(props.info !== null && props.info !== "") || props.dot ? (
        <View
          className={`van-info ${bem("info", {
            dot: props.dot
          })} ${customClass}`}
          style={props.customStyle}
        >
          {props.dot ? "" : props.info}
        </View>
      ) : null}
    </Block>
  );
}

Info.defaultProps = {
  info: "",
  dot: false
};
