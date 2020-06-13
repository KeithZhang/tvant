import React from 'react';
import Taro from '@tarojs/taro';

import CellGroup from '@ui-base/cell-group';
import Field from '@ui-base/field';

import './index.less';

import PageContainer from '../components/page-container/index';
import DemoBlock from '../components/demo-block';
import QMButton from '@ui-base/button';

export default function FieldDemo() {
  const data = {
    sms: '',
    value: '',
    password: '',
    username: '',
    username2: '',
    username3: '',
    message: '',
    phone: '1365577',
  };

  const onClickIcon = () => {
    Taro.showToast({
      icon: 'none',
      title: '点击图标',
    });
  };

  return (
    <PageContainer>
      <DemoBlock title='基础用法'>
        <CellGroup>
          <Field
            value={data.value}
            placeholder='请输入用户名'
            border={false}
            clearable
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title='自定义类型'>
        <CellGroup>
          <Field
            value={data.username}
            label='用户名'
            placeholder='请输入用户名'
            clearable
            rightIcon='iconinfo'
            rightIconClass='custom-icon'
            required
            onClickIcon={onClickIcon}
          />
          <Field
            value={data.password}
            password
            required
            label='密码'
            placeholder='请输入密码'
            border={false}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title='禁用输入框'>
        <DemoBlock>
          <Field
            value='输入框已禁用'
            label='用户名'
            leftIcon='iconself-line'
            disabled
            border={false}
          />
        </DemoBlock>
      </DemoBlock>

      <DemoBlock title='错误提示'>
        <DemoBlock>
          <Field
            value={data.username2}
            label='用户名'
            placeholder='请输入用户名'
            error
          />
          <Field
            value={data.phone}
            label='手机号'
            placeholder='请输入手机号'
            errorMessage='手机号格式错误'
            border={false}
          />
        </DemoBlock>
      </DemoBlock>

      <DemoBlock title='内容对齐方式'>
        <DemoBlock>
          <Field
            value={data.username3}
            label='用户名'
            placeholder='请输入用户名'
            inputAlign='right'
          />
        </DemoBlock>
      </DemoBlock>

      <DemoBlock title='高度自适应'>
        <DemoBlock>
          <Field
            value='{{ message }}'
            label='留言'
            type='textarea'
            placeholder='请输入留言'
            autoSize
            border={false}
          />
        </DemoBlock>
      </DemoBlock>

      <DemoBlock title='插入按钮'>
        <DemoBlock>
          <Field
            value={data.sms}
            center
            clearable
            label='短信验证码'
            placeholder='请输入短信验证码'
            border={false}
            renderButton={() => (
              <QMButton size='small' type='primary' custom-class='button'>
                发送验证码
              </QMButton>
            )}
          />
        </DemoBlock>
      </DemoBlock>
    </PageContainer>
  );
}
