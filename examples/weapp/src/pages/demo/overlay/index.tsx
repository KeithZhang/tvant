
import React, { useState } from "react";
import { View, Button } from "@tarojs/components";
import Overlay from "@ui-base/overlay";

export default function OverlayDemo() {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        显示
      </Button>
      <Overlay
        show={show}
        onClick={() => {
          setShow(!show);
        }}
      ></Overlay>
    </View>
  );
}
