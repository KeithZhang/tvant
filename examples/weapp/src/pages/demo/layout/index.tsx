import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';

import './index.less';
import Row from '@ui-base/row';
import Col from '@ui-base/col';
import DemoBlock from '../components/demo-block';
import PageContainer from '../components/page-container/index';

export default function LayoutDemo() {
  return (
    <PageContainer>
      <DemoBlock title='基础用法' padding>
        <Row>
          <Col span={8} customClass='dark'>
            span: 8
          </Col>
          <Col span={8} customClass='light'>
            span: 8
          </Col>
          <Col span={8} customClass='dark'>
            span: 8
          </Col>
        </Row>

        <Row>
          <Col span={4} customClass='dark'>
            span: 4
          </Col>
          <Col span={10} offset={4} customClass='light'>
            offset: 4, span: 10
            <Row gutter='20'>
              <Col span={8} customClass='dark'>
                span: 8
              </Col>
              <Col span={8} customClass='light'>
                span: 8
              </Col>
              <Col span={8} customClass='dark'>
                span: 8
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col offset={12} span={12} customClass='dark'>
            offset: 12, span: 12
          </Col>
        </Row>
      </DemoBlock>

      <DemoBlock title='在列元素之间增加间距' padding>
        <Row gutter='20'>
          <Col span={8} customClass='dark'>
            span: 8
          </Col>
          <Col span={8} customClass='light'>
            span: 8
          </Col>
          <Col span={8} customClass='dark'>
            span: 8
          </Col>
        </Row>
      </DemoBlock>
      </PageContainer>
  );
}
