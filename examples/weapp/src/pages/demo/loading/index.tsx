import React from "react";
import { View } from "@tarojs/components";
import QMLoading from "@ui-base/loading";

import "./index.less";
import DemoBlock from "../components/demo-block";

export default function LoadingDemo() {
  return (
    <View>
      <DemoBlock title="加载类型" padding>
        <QMLoading custom-class='demo_loading' />
        <QMLoading custom-class='demo_loading' type="spinner" />
      </DemoBlock>
      <DemoBlock title="自定义颜色" padding>
        <QMLoading custom-class='demo_loading' color="#1989fa" />
        <QMLoading
          custom-class='demo_loading'
          type="spinner"
          color="#1989fa"
        />
      </DemoBlock>
      <DemoBlock title="加载文案" padding>
        <QMLoading custom-class='demo_loading' size="24px">
          加载中...
        </QMLoading>
      </DemoBlock>
      <DemoBlock title="垂直排列" padding>
        <QMLoading custom-class='demo_loading' size="24px" vertical>
          加载中...
        </QMLoading>
      </DemoBlock>
    </View>
  );
}