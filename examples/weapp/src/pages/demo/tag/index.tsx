import React, { useState } from 'react';
import { View } from '@tarojs/components';
import Tag from '@ui-base/tag';

import './index.less';
import DemoBlock from '../components/demo-block';

export default function TagDemo() {
  const [show, setShow] = useState({
    success: true,
    primary: true,
  });

  return (
    <View>
      <DemoBlock title='基础用法' padding>
        <Tag customClass='demo-margin-right'>标签</Tag>
        <Tag customClass='demo-margin-right' type='primary'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' type='success'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' type='danger'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' type='warning'>
          标签
        </Tag>
      </DemoBlock>

      <DemoBlock title='圆角样式' padding>
        <Tag customClass='demo-margin-right' round>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' round type='primary'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' round type='success'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' round type='danger'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' round type='warning'>
          标签
        </Tag>
      </DemoBlock>

      <DemoBlock title='标记样式' padding>
        <Tag customClass='demo-margin-right' mark>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' mark type='primary'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' mark type='success'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' mark type='danger'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' mark type='warning'>
          标签
        </Tag>
      </DemoBlock>

      <DemoBlock title='空心样式' padding>
        <Tag customClass='demo-margin-right' plain>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' plain type='primary'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' plain type='success'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' plain type='danger'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' plain type='warning'>
          标签
        </Tag>
      </DemoBlock>

      <DemoBlock title='自定义颜色' padding>
        <Tag customClass='demo-margin-right' color='#f2826a'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' color='#f2826a' plain>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' color='#7232dd'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' color='#7232dd' plain>
          标签
        </Tag>
        <Tag
          customClass='demo-margin-right'
          color='#ffe1e1'
          textColor='#ad0000'
        >
          标签
        </Tag>
      </DemoBlock>

      <DemoBlock title='标签大小' padding>
        <Tag customClass='demo-margin-right' type='danger'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' type='danger' size='medium'>
          标签
        </Tag>
        <Tag customClass='demo-margin-right' type='danger' size='large'>
          标签
        </Tag>
      </DemoBlock>

      <DemoBlock title='可关闭标签' padding>
        {show.primary ? (
          <Tag
            customClass='demo-margin-right'
            type='primary'
            size='medium'
            closeable
            onClose={() => {
              setShow({
                ...show,
                primary: false,
              });
            }}
          >
            标签
          </Tag>
        ) : null}
        {show.success ? (
          <Tag
            type='success'
            size='medium'
            closeable
            onClose={() => {
              setShow({
                ...show,
                success: false,
              });
            }}
          >
            标签
          </Tag>
        ) : null}
      </DemoBlock>
    </View>
  );
}
