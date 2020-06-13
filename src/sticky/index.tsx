import React, { useState, useEffect, useRef } from 'react';
import Taro, { NodesRef} from '@tarojs/taro'
import { View } from '@tarojs/components';

import './index.less';
import useBem from '../hooks/useBem';
import useRect from '../hooks/useRect';

interface IStickyProps {
  disabled?: boolean;
  offsetTop?: number;
  zIndex?: number;
  container?: () => NodesRef;
  children?: any;
  onScroll?: ({ scrollTop: number, isFixed: boolean }) => void;
}

const ROOT_ELEMENT = '.van-sticky';


export default function Sticky(props: IStickyProps) {
  const { bem } = useBem();
  const { getRect } = useRect();

  const currentRef = useRef({
    contentObserver: null as any,
    containerObserver: null as any,
    containerHeight: 0,
    height: 0
  })


  const [fixed, setFixed] = useState(false);
  const [state, setState] = useState({
    containerStyle: '',
    wrapStyle: '',
  });

  const setStyle = (fixed) => {
    const { offsetTop, zIndex } = props;
    const { height } = currentRef.current;
    console.log('setStyle...');
    console.log('fixed...', fixed);
    console.log('offsetTop...', offsetTop);
    console.log('zIndex...', zIndex);
    console.log('height...', height);

    if (fixed) {
      setState({
        wrapStyle: `top: ${offsetTop}px;`,
        containerStyle: `height: ${height}px; z-index: ${zIndex};`,
      });
    } else {
      setState({
        wrapStyle: '',
        containerStyle: '',
      });
    }
  };

  const changeFixed = (type, top) => {
    console.log('changeFixed...', type);

    const { offsetTop = 0, onScroll } = props;
    const { containerHeight, height } = currentRef.current;
    const fixed =
      containerHeight && height
        ? top > height - containerHeight && top < offsetTop
        : top < offsetTop;

    console.log('top...', top);
    console.log('height...', height);
    console.log('offsetTop...', offsetTop);
    console.log('containerHeight...', containerHeight);
    console.log('fixed...', fixed);

    onScroll &&
      onScroll({
        scrollTop: top,
        isFixed: fixed,
      });

    setFixed(fixed);

    Taro.nextTick(() => {
      setStyle(fixed);
    });
  };

  const disconnectObserver = (observerName?) => {
    console.log('disconnectObserver...', observerName);
    if (observerName) {
      const observer = currentRef.current[observerName];
      console.log('observer...', observer);
      observer && observer.disconnect();
    } else {
      currentRef.current.contentObserver && currentRef.current.contentObserver.disconnect();
      currentRef.current.containerObserver && currentRef.current.containerObserver.disconnect();
    }
  };

  const observeContent = () => {
    console.log('observeContent...');
    const { offsetTop = 0 } = props;
    disconnectObserver('contentObserver');
    const contentObserver = Taro.createIntersectionObserver(this, {
      thresholds: [0, 1],
    });
    console.log('contentObserver...', contentObserver);
    currentRef.current.contentObserver = contentObserver;
    contentObserver.relativeToViewport({ top: -offsetTop });
    contentObserver.observe(ROOT_ELEMENT, (res) => {
      console.log('res...', res);
      if (props.disabled) {
        return;
      }
      changeFixed('observeContent', res.boundingClientRect.top);
    });
  };

  const getContainerRect = (container) => {
    const nodesRef = container();
    return new Promise<NodesRef.BoundingClientRectCallbackResult>((resolve) =>
      nodesRef.boundingClientRect(resolve).exec()
    );
  };

  const observeContainer = () => {
    console.log('observeContainer...');
    if (typeof props.container !== 'function') {
      return;
    }

    getContainerRect(props.container).then((rect) => {
      console.log('getContainerRect...', rect);
      currentRef.current.containerHeight = rect.height;
      disconnectObserver('containerObserver');
      const containerObserver = Taro.createIntersectionObserver(this, {
        thresholds: [0, 1],
      });
      currentRef.current.containerObserver = containerObserver;
      containerObserver.relativeToViewport({
        top: currentRef.current.containerHeight - currentRef.current.height,
      });
      containerObserver.observe(ROOT_ELEMENT, (res) => {
        if (props.disabled) {
          return;
        }
        changeFixed('observeContainer', res.boundingClientRect.top);
      });
    });
  };


  const initObserver = () => {
    console.log('initObserver...');
    disconnectObserver();
    getRect(ROOT_ELEMENT).then((rect) => {
      console.log('sticky getRect...', rect);
      currentRef.current.height = rect.height;
      // Taro.nextTick(() => {
        observeContent();
        observeContainer();
      // });
    });
  };

  useEffect(() => {
    console.log('mounted...', props.disabled);

    props.disabled ? disconnectObserver() : initObserver();

    return () => {
      disconnectObserver();
    };
  }, [props.disabled]);

  useEffect(() => {
    console.log('props.offsetTop...', props.offsetTop);
    observeContent();
  }, [props.offsetTop]);

  useEffect(() => {
    if (typeof props.container === 'function' && currentRef.current.height) {
      observeContainer();
    }
  }, [props.container]);

  return (
    <View className='custom-class van-sticky' style={state.containerStyle}>
      <View className={bem('sticky-wrap', { fixed })} style={state.wrapStyle}>
        {props.children}
      </View>
    </View>
  );
}

Sticky.defaultProps = {
  zIndex: 99,
  offsetTop: 0,
  disabled: false,
};

Sticky.externalClasses = ['custom-class'];
