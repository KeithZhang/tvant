import React, { useState } from 'react';
import { View, Button } from '@tarojs/components';
import Transition from '@ui-base/transition';

import './index.less';

export default function TransitionDemo() {
  const [state, setState] = useState({
    show: false,
    name: 'fade',
    showCustom: false,
  });

  function onClickFade() {
    trigger('fade');
  }

  function onClickFadeUp() {
    trigger('fade-up');
  }

  function onClickFadeDown() {
    trigger('fade-down');
  }

  function onClickFadeLeft() {
    trigger('fade-left');
  }

  function onClickFadeRight() {
    trigger('fade-right');
  }

  function onClickSlideUp() {
    trigger('slide-up');
  }

  function onClickSlideDown() {
    trigger('slide-down');
  }

  function onClickSlideLeft() {
    trigger('slide-left');
  }

  function onClickSlideRight() {
    trigger('slide-right');
  }

  function trigger(name) {
    setState((preState) => ({ ...preState, name, show: true }));
    setTimeout(() => {
      setState((preState) => ({ ...preState, show: false }));
    }, 1000);
  }

  function onClickCustom() {
    setState((preState) => ({ ...preState, showCustom: true }));
    setTimeout(() => {
      setState((preState) => {
        console.log('onClickCustom');
        return { ...preState, showCustom: false };
      });
    }, 1000);
  }

  function onBeforeEnter() {
    console.log('before enter');
  }

  function onEnter() {
    console.log('on enter');
  }

  function onAfterEnter() {
    console.log('on after enter');
  }

  function onBeforeLeave() {
    console.log('on before leave');
  }

  function onLeave() {
    console.log('on leave');
  }

  function onAfterLeave() {
    console.log('on after leave');
  }

  return (
    <View>
      <Button onClick={onClickFade}>Fade</Button>
      <Button onClick={onClickFadeUp}>Fade Up</Button>
      <Button onClick={onClickFadeDown}>Fade Down</Button>
      <Button onClick={onClickFadeLeft}>Fade Left</Button>
      <Button onClick={onClickFadeRight}>Fade Right</Button>
      <Button onClick={onClickSlideUp}>Slide Up</Button>
      <Button onClick={onClickSlideDown}>Slide Down</Button>
      <Button onClick={onClickSlideLeft}>Slide Left</Button>
      <Button onClick={onClickSlideRight}>Slide Right</Button>
      <Button onClick={onClickCustom}>Custom</Button>

      <Transition
        show={state.show}
        name={state.name}
        custom-class={'block'}
      ></Transition>
      <Transition
        show={state.showCustom}
        duration={{ enter: 3000, leave: 3000 }}
        name=''
        custom-class={'block'}
        enter-class={'van-enter-class'}
        enter-active-class={'van-enter-active-class'}
        leave-active-class={'van-leave-active-class'}
        leave-to-class={'van-leave-to-class'}
        onBeforeEnter={onBeforeEnter}
        onEnter={onEnter}
        onAfterEnter={onAfterEnter}
        onBeforeLeave={onBeforeLeave}
        onLeave={onLeave}
        onAfterLeave={onAfterLeave}
      ></Transition>
    </View>
  );
}
