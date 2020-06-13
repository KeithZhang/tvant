import React, {useState, useRef} from 'react';
import { Text, View, Block } from '@tarojs/components';

import './index.less';
import Overlay from '../overlay';
import Transition from '../transition';
import Loading from '../loading';
import QMIcon from '../icon';
import { noop, isObj } from '../util';

interface IToastProps {
  id?: string;
  show?: boolean;
  mask?: boolean;
  message?: string;
  forbidClick?: boolean;
  zIndex?: number;
  type?: string;
  loadingType?: 'spinner' | 'circular';
  position?: 'top' | 'middle' | 'bottom';
  children?: any;
}

const defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 2000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
};



const Toast = (props: IToastProps, ref?: any) => {
  const {
    // show,
    // mask,
    // message = '',
    // type = 'text',
    // zIndex = 1000,
    // forbidClick = false,
    // position = 'middle',
    children,
  } = props;

  const [state, setState] = useState({
    show: props.show || false,
    mask: props.mask || false,
    message: props.message || '',
    type: props.type || 'text',
    zIndex: props.zIndex || 1000,
    forbidClick: props.forbidClick || false,
    position: props.position || 'middle',
  });
  const { show, mask, message, type, zIndex, forbidClick, position } = state;

  console.log('state...', state);

  const timerRef = useRef({
    value: -1,
  });

  const parseOptions = (message) => {
    return isObj(message) ? message : { message };
  };
  
  const createMethod = (type) => (options) =>
    Toast({
      type,
      ...parseOptions(options),
    });

  const Toast = (toastOptions) => {
    const options = {
      ...defaultOptions,
      ...parseOptions(toastOptions),
    };
    setState(options);

    if (timerRef.current.value > 0) {
      clearTimeout(timerRef.current.value);
    }

    if (options.duration > 0) {
      timerRef.current.value = setTimeout(() => {
        ref.current.Toast.clear();
      }, options.duration);
    }
  };

  Toast.loading = createMethod('loading');
  Toast.success = createMethod('success');
  Toast.fail = createMethod('fail');

  Toast.clear = () => {
    setState({
      ...state,
      show: false,
    });
  };

  ref.current.Toast = Toast;

  return (
    <Block>
      {mask || forbidClick ? (
        <Overlay
          show={show}
          zIndex={zIndex}
          customStyle={mask ? '' : 'background-color: transparent;'}
        />
      ) : null}
      <Transition
        show={show}
        customStyle={'z-index:' + zIndex}
        customClass='van-toast__container'
      >
        <View
          className={`van-toast van-toast--${
            type === 'text' ? 'text' : 'icon'
          } van-toast--${position}`}
          onTouchMove={noop}
        >
          {type === 'text' ? (
            <Text>{message}</Text>
          ) : (
            <Block>
              {type === 'loading' ? (
                <Loading></Loading>
              ) : (
                // TODO <QMIcon className='van-toast__icon' name={type} />
                <QMIcon className='van-toast__icon' name='iconcheck' />
              )}
              {message ? (
                <Text className='van-toast__text'>{message}</Text>
              ) : null}
            </Block>
          )}
          {children}
        </View>
      </Transition>
    </Block>
  );
};

export default React.forwardRef(Toast);
