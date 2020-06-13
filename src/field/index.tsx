import React, { useState } from 'react';
import Taro from '@tarojs/taro'
import { View, Textarea, Input, BaseEventOrig } from '@tarojs/components';

import './index.less';
import useBem from '../hooks/useBem';
import Cell from '../cell';
import QMIcon from '../icon';

interface IFieldProps {
  name?: string;
  label?: string;
  size?: 'large';
  value?: string | number;
  center?: boolean;
  type?: 'text' | 'number' | 'idcard' | 'textarea' | 'digit';
  fixed?: boolean;
  focus?: boolean;
  border?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  clickable?: boolean;
  required?: boolean;
  password?: boolean;
  titleWidth?: string;
  maxLength?: number;
  placeholder?: string;
  placeholderStyle?: string;
  customStyle?: string;
  isLink?: boolean;
  arrowDirection?: 'left' | 'up' | 'down';
  showWordLimit?: boolean;
  error?: boolean;
  errorMessage?: string;
  errorMessageAlign?: 'center' | 'right';
  inputAlign?: 'left' | 'center' | 'right';
  autoSize?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done';
  confirmHold?: boolean;
  holdKeyboard?: boolean;
  cursorSpacing?: number;
  adjustPosition?: boolean;
  showConfirmBar?: boolean;
  selectionStart?: number;
  selectionEnd?: number;
  autoFocus?: boolean;
  disableDefaultPadding?: boolean;
  cursor?: number;
  onInput?: any;
  onChange?: any;
  onConfirm?: any;
  onClickIcon?: any;
  onFocus?: any;
  onBlur?: any;
  onClear?: any;
  onLineChange?: any;
  onKeyboardHeightChange?: any;
  renderLabel?: any;
  renderLeftIcon?: any;
  renderRightIcon?: any;
  renderButton?: any;
  inputClass?: string;
  rightIconClass?: string;
}

export default function Field(props: IFieldProps) {
  const {
    type = 'text',
    label,
    size,
    center,
    fixed = false,
    focus = false,
    border = true,
    disabled = false,
    readonly = false,
    clearable = false,
    clickable = false,
    required = false,
    password = false,
    titleWidth = '90px',
    maxLength = -1,
    placeholder,
    placeholderStyle,
    isLink = false,
    arrowDirection,
    showWordLimit = false,
    error = false,
    errorMessage = '',
    errorMessageAlign = '',
    inputAlign = 'left',
    autoSize = false,
    confirmType = 'done',
    confirmHold = false,
    holdKeyboard = false,
    cursorSpacing = 50,
    adjustPosition = true,
    showConfirmBar = true,
    selectionStart = -1,
    selectionEnd = -1,
    autoFocus = false,
    leftIcon,
    rightIcon,
    disableDefaultPadding = true,
    cursor = -1,
    renderButton,
    renderLabel,
    renderLeftIcon,
    renderRightIcon,
    customStyle,
    inputClass,
    rightIconClass,
    onInput,
    onBlur,
    onFocus,
    onConfirm,
    onClear,
    onClickIcon,
    onChange,
  } = props;

  const [state, setState] = useState({
    value: '',
    focused: false,
  });

  const { bem } = useBem();
  const system = Taro.getSystemInfoSync()
    .system.split(' ')
    .shift()
    ?.toLocaleLowerCase();

  const onInputLocal = (e: BaseEventOrig<any>) => {
    const { value = '' } = e.detail || {};
    setState({
      ...state,
      value,
    });

    onInput && onInput(value);
    onChange && onChange(value);
  };

  const onFocusLocal = (e: BaseEventOrig<any>) => {
    setState({
      ...state,
      focused: true,
    });
    onFocus && onFocus(e.detail);
  };

  const onBlurLocal = (e: BaseEventOrig<any>) => {
    setState({
      ...state,
      focused: false,
    });
    onBlur && onBlur(e.detail);
  };

  const onConfirmLocal = () => {
    onConfirm && onConfirm(state.value);
  };

  const onClearLocal = () => {
    setState({
      ...state,
      value: '',
    });

    onInput && onInput('');
    onChange && onChange('');
    onClear && onClear('');
  };

  return (
    <Cell
      size={size}
      icon={leftIcon}
      title={label}
      center={center}
      border={border}
      isLink={isLink}
      required={required}
      clickable={clickable}
      titleWidth={titleWidth}
      customStyle={customStyle}
      arrowDirection={arrowDirection}
      renderIcon={renderLeftIcon}
      renderTitle={renderLabel}
      customClass='van-field'
    >
      <View className={bem('field__body', [type, system])}>
        {type === 'textarea' ? (
          <Textarea
            className={`${inputClass} ${bem('field__input', [
              inputAlign,
              type,
              { disabled, error },
            ])}`}
            fixed={fixed}
            focus={focus}
            value={state.value}
            disabled={disabled || readonly}
            maxlength={maxLength}
            placeholder={placeholder}
            placeholderStyle={placeholderStyle}
            placeholderClass={bem('field__placeholder', { error })}
            autoHeight={autoSize}
            cursorSpacing={cursorSpacing}
            adjustPosition={adjustPosition}
            showConfirmBar={showConfirmBar}
            holdKeyboard={holdKeyboard}
            selectionEnd={selectionEnd}
            selectionStart={selectionStart}
            onInput={onInputLocal}
            onBlur={onBlurLocal}
            onFocus={onFocusLocal}
            onConfirm={onConfirmLocal}
          ></Textarea>
        ) : (
          <Input
            className={`${inputClass} ${bem('field__input', [
              inputAlign,
              { disabled, error },
            ])}`}
            type={type}
            focus={focus}
            value={state.value}
            disabled={disabled || readonly}
            maxlength={maxLength}
            placeholder={placeholder}
            placeholderStyle={placeholderStyle}
            placeholderClass={bem('field__placeholder', { error })}
            confirmType={confirmType}
            confirmHold={confirmHold}
            holdKeyboard={holdKeyboard}
            cursorSpacing={cursorSpacing}
            adjustPosition={adjustPosition}
            selectionEnd={selectionEnd}
            selectionStart={selectionStart}
            password={password}
            onInput={onInputLocal}
            onBlur={onBlurLocal}
            onFocus={onFocusLocal}
            onConfirm={onConfirmLocal}
          ></Input>
        )}
        {clearable && state.focused && state.value && !readonly ? (
          <QMIcon
            size='16px'
            name='icondelete-o'
            className='van-field__clear-root van-field__icon-root'
            onClick={onClearLocal}
          />
        ) : null}
        <View className='van-field__icon-container' onClick={onClickIcon}>
          {rightIcon ? (
            <QMIcon
              size='16px'
              name={rightIcon}
              className='van-field__icon-root'
              customClass={rightIconClass}
            />
          ) : null}
          {renderRightIcon && renderRightIcon()}
        </View>
        <View className='van-field__button'>
          {renderButton && renderButton()}
        </View>
      </View>
      {errorMessage ? (
        <View
          className={`van-field__error-message ${bem('field__error', [
            errorMessageAlign,
            { disabled, error },
          ])}`}
        ></View>
      ) : null}
    </Cell>
  );
}
