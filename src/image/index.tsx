import React from 'react';
import { View, Image } from '@tarojs/components';

import './index.less';
import useBem from '../hooks/useBem';
import { useState } from 'react';
import { ImageProps } from '@tarojs/components/types/Image';
import QMIcon from '../icon';
import { useEffect } from 'react';
import { isDef, addUnit } from '../util';

const FIT_MODE_MAP: { [key: string]: keyof ImageProps.mode } = {
  none: 'center',
  fill: 'scaleToFill',
  cover: 'aspectFill',
  contain: 'aspectFit',
};

interface IImageProps {
  src?: string;
  fit?: 'contain' | 'cover' | 'fill' | 'none';
  alt?: string;
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  round?: boolean;
  lazyLoad?: boolean;
  showError?: boolean;
  showLoading?: boolean;
  useErrorSlot?: boolean;
  useLoadingSlot?: boolean;
  showMenuByLongpress?: boolean;
  onClick?: any;
  onLoad?: any;
  onError?: any;
  renderLoading?: any;
  renderError?: any;
  customClass?: string;
  imageClass?: string;
  loadingClass?: string;
  errorClass?: string;
}

export default function QMImage(props: IImageProps) {
  const {
    src = '',
    fit = 'fill',
    alt,
    width,
    height,
    radius = 0,
    round = false,
    lazyLoad = false,
    showError = true,
    showLoading = true,
    useErrorSlot = false,
    useLoadingSlot = false,
    showMenuByLongpress = false,
    onClick,
    onError,
    onLoad,
    renderLoading,
    renderError,
    customClass = '',
    imageClass = '',
    errorClass = '',
    loadingClass = '',
  } = props;

  const { bem } = useBem();
  const [style, setStyle] = useState('');
  const [state, setState] = useState<{
    error: boolean;
    loading: boolean;
    mode: keyof ImageProps.mode;
  }>({
    error: false,
    loading: true,
    mode: 'center',
  });

  const onErrorLocal = (e) => {
    setState({
      ...state,
      loading: false,
      error: true,
    });
    onError && onError(e.detail);
  };

  const onLoadLocal = (e) => {
    setState({
      ...state,
      loading: false,
    });

    onLoad && onLoad(e.detail);
  };

  useEffect(() => {
    let style = '';

    if (isDef(width)) {
      style += `width: ${addUnit(width)};`;
    }

    if (isDef(height)) {
      style += `height: ${addUnit(height)};`;
    }

    if (isDef(radius)) {
      style += 'overflow: hidden;';
      style += `border-radius: ${addUnit(radius)};`;
    }
    setStyle(style);
  }, [width, height, radius]);

  useEffect(() => {
    setState((preState) => ({
      ...preState,
      mode: FIT_MODE_MAP[fit],
    }));
  }, [fit]);

  useEffect(() => {
    setState((preState) => ({
      ...preState,
      error: false,
      loading: true,
    }));
  }, [src]);

  console.log('error...', state.error);
  console.log('loading...', state.loading);
  console.log('useLoadingSlot...', useLoadingSlot);
  console.log('showLoading...', showLoading);

  return (
    <View
      className={`${bem('image', { round })} ${customClass}`}
      style={style}
      onClick={onClick}
    >
      {!state.error ? (
        <Image
          src={src}
          mode={state.mode}
          lazyLoad={lazyLoad}
          className={`${imageClass} van-image__img`}
          showMenuByLongpress={showMenuByLongpress}
          onLoad={onLoadLocal}
          onError={onErrorLocal}
        />
      ) : null}
      {state.loading && showLoading ? (
        <View className={`${loadingClass} van-image__loading`}>
          {useLoadingSlot ? (
            renderLoading && renderLoading()
          ) : (
            <QMIcon name='icontupian' size='22' />
          )}
        </View>
      ) : null}

      {state.error && showError ? (
        <View className={`${errorClass} van-image__error`}>
          {useErrorSlot ? (
            renderError && renderError()
          ) : (
            <QMIcon name='iconwarn' size='22' />
          )}
        </View>
      ) : null}
    </View>
  );
}
