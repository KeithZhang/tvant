import React, { useCallback } from 'react';
import Taro from '@tarojs/taro';
import { View, ITouchEvent } from '@tarojs/components';
import QMIcon from '@ui-base/icon';

import './index.less';
import useBem from '../hooks/useBem';

interface ICellProps {
  icon?: string;
  title?: string | number;
  titleWidth?: string;
  value?: string | number;
  label?: string;
  size?: 'large';
  border?: boolean;
  center?: boolean;
  url?: string;
  linkType?: 'navigateTo' | 'redirectTo' | 'switchTab' | 'reLaunch';
  clickable?: boolean;
  isLink?: boolean;
  required?: boolean;
  arrowDirection?: 'left' | 'up' | 'down';
  useLabelSlot?: boolean;
  renderTitle?: any;
  renderLabe?: any;
  renderIcon?: any;
  renderRightIcon?: any;
  renderExtra?: any;
  children?: any;
  onClick?: (e: any) => void;
  customStyle?: string;
  customClass?: string;
}

export default function Cell(props: ICellProps) {
  const {
    icon,
    title,
    titleWidth,
    value,
    label,
    size,
    border = true,
    center = true,
    url,
    linkType = 'navigateTo',
    clickable = false,
    isLink = false,
    required = false,
    arrowDirection,
    useLabelSlot = false,
    renderTitle,
    renderIcon,
    renderLabe,
    renderRightIcon,
    renderExtra,
    children,
    onClick,
    customStyle,
    customClass
  } = props;

  const { bem } = useBem();

  const onClickLocal = useCallback((e: ITouchEvent) => {
    onClick && onClick(e.detail);
    url && Taro[linkType]({ url });
  }, []);

  return (
    <View
      className={`${bem('cell', [
        size,
        {
          center,
          required,
          borderless: !border,
          clickable: isLink || clickable,
        },
      ])} ${customClass}`}
      hover-class='van-cell--hover hover-class'
      hover-stay-time='70'
      style={customStyle}
      onClick={onClickLocal}
    >
      {icon ? (
        <QMIcon
          name={icon}
          className='van-cell__left-icon-wrap'
          custom-class='van-cell__left-icon'
        />
      ) : (
        renderIcon && renderIcon()
      )}

      <View
        style={
          titleWidth
            ? 'max-width:' + titleWidth + ';min-width:' + titleWidth
            : ''
        }
        className='van-cell__title title-class'
      >
        {title ? title : renderTitle && renderTitle()}
        {label || useLabelSlot ? (
          <View className='van-cell__label label-class'>
            {useLabelSlot ? renderLabe && renderLabe() : label ? label : ''}
          </View>
        ) : null}
      </View>

      <View className='van-cell__value value-class'>
        {value || value === 0 ? value : children}
      </View>

      {isLink ? (
        <QMIcon
          name={arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow'}
          className='van-cell__right-icon-wrap right-icon-class'
          custom-class='van-cell__right-icon'
        />
      ) : (
        renderRightIcon && renderRightIcon()
      )}

      {renderExtra && renderExtra()}
    </View>
  );
}
