import React, { useState } from 'react';
import { View, Button } from '@tarojs/components';

import QMPopup from '@ui-base/popup';

export default function PopupDemo() {
  const [state, setState] = useState({
    basic: false,
    top: false,
    bottom: false,
    right: false,
    left: false,
  });

  return (
    <View>
      <Button
        onClick={() => {
          setState((preState) => ({ ...preState, basic: !state.basic }));
        }}
      >
        展示弹出层
      </Button>
      <Button
        onClick={() => {
          setState((preState) => ({ ...preState, top: !state.top }));
        }}
      >
        顶部弹出
      </Button>

      <Button
        onClick={() => {
          setState((preState) => ({ ...preState, bottom: !state.bottom }));
        }}
      >
        底部弹出
      </Button>
      <Button
        onClick={() => {
          setState((preState) => ({ ...preState, right: !state.right }));
        }}
      >
        右侧弹出
      </Button>
      <Button
        onClick={() => {
          setState((preState) => ({ ...preState, left: !state.left }));
        }}
      >
        左侧弹出
      </Button>
      <QMPopup
        show={state.basic}
        customStyle={'padding: 30px 50px'}
        onClose={() => {
          setState((preState) => ({ ...preState, basic: !state.basic }));
        }}
      >
        <View style={'background-color: red; display: flex; flex: 1'}>
          内容
        </View>
      </QMPopup>

      <QMPopup
        show={state.top}
        customStyle={'height: 20%'}
        position={'top'}
        onClose={() => {
          setState((preState) => ({ ...preState, top: !state.top }));
        }}
      />

      <QMPopup
        show={state.bottom}
        customStyle={'height: 20%'}
        position={'bottom'}
        onClose={() => {
          setState((preState) => ({ ...preState, bottom: !state.bottom }));
        }}
      />

      <QMPopup
        show={state.right}
        customStyle={'width: 30%; height: 100%'}
        position={'right'}
        onClose={() => {
          setState((preState) => ({ ...preState, right: !state.right }));
        }}
      />

      <QMPopup
        show={state.left}
        customStyle={'width: 30%; height: 100%'}
        position={'left'}
        onClose={() => {
          setState((preState) => ({ ...preState, left: !state.left }));
        }}
      />
    </View>
  );
}
