import React, { useState, useEffect, useCallback } from 'react';
import { isObj } from '../util';

export default function useTransition({ props }) {
  const {
    show,
    enterClass,
    enterActiveClass,
    enterToClass,
    leaveClass,
    leaveActiveClass,
    leaveToClass,
  } = props;
  let transitionEnded = false;
  let [state, setState] = useState({
    type: '',
    inited: false,
    display: false,
    status: '',
    classes: '',
    currentDuration: '',
  });

  const getClassNames = useCallback(
    (name: string) => ({
      enter: `van-${name}-enter van-${name}-enter-active ${enterClass} ${enterActiveClass}`,
      'enter-to': `van-${name}-enter-to van-${name}-enter-active ${enterToClass} ${enterActiveClass}`,
      leave: `van-${name}-leave van-${name}-leave-active ${leaveClass} ${leaveActiveClass}`,
      'leave-to': `van-${name}-leave-to van-${name}-leave-active ${leaveToClass} ${leaveActiveClass}`,
    }),
    []
  );

  const nextTick = () =>
    new Promise((resolve) => setTimeout(resolve, 1000 / 30));

  const enter = () => {
    console.log('enter...');
    const { duration, name } = props;
    const classNames = getClassNames(name);
    console.log('enter name...', name);
    console.log('classNames...', classNames);
    const currentDuration = isObj(duration) ? duration.enter : duration;
    setState((preState) => ({
      ...preState,
      status: 'enter',
    }));
    console.log('currentDuration...', currentDuration);

    props.onBeforeEnter && props.onBeforeEnter();
    Promise.resolve()
      .then(nextTick)
      .then(() => {
        // checkStatus("enter");
        props.onEnter && props.onEnter();
        setState((preState) => ({
          ...preState,
          inited: true,
          display: true,
          classes: classNames.enter,
          currentDuration,
        }));
      })
      .then(nextTick)
      .then(() => {
        // checkStatus("enter");
        transitionEnded = false;
        // setTimeout(() => onTransitionEnd(props.onAfterEnter), currentDuration);
        setState((preState) => ({
          ...preState,
          classes: classNames['enter-to'],
        }));
      })
      .catch(() => {});
  };

  const leave = () => {
    console.log('leave...');
    if (!state.display) {
      return;
    }
    const { duration, name } = props;
    console.log('leave name...', name);
    const classNames = getClassNames(name);
    console.log('leave classNames...', classNames);
    const currentDuration = isObj(duration) ? duration.leave : duration;

    console.log('leave currentDuration...', currentDuration);
    setState((preState) => ({ ...preState, status: 'leave' }));

    props.onBeforeLeave && props.onBeforeLeave();
    Promise.resolve()
      .then(nextTick)
      .then(() => {
        // checkStatus("leave");
        props.onLeave && props.onLeave();
        setState((preState) => ({
          ...preState,
          classes: classNames.leave,
          currentDuration,
        }));
      })
      .then(nextTick)
      .then(() => {
        // checkStatus("leave");
        transitionEnded = false;
        setTimeout(onTransitionEnd, currentDuration);
        setState((preState) => ({
          ...preState,
          classes: classNames['leave-to'],
        }));
      })
      .catch(() => {});
  };

  const checkStatus = (statusParam) => {
    console.log('checkStatus...', statusParam);
    console.log('checkStatus...', state.status);
    if (statusParam !== state.status) {
      throw new Error(`incongruent status: ${statusParam}`);
    }
  };

  const onTransitionEnd = () => {
    console.log('onTransitionEnd...', transitionEnded);
    if (transitionEnded) {
      return;
    }

    transitionEnded = true;
    const { display } = state;
    if (!show && display) {
      setState((preState) => ({ ...preState, display: false }));
    }
  };

  useEffect(() => {
    console.log('useEffect...', props);
    show ? enter() : leave();
  }, [show]);

  return { state, onTransitionEnd };
}
