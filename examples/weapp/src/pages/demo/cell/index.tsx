import React from 'react';
import { View } from '@tarojs/components';
import CellGroup from '@ui-base/cell-group';
import Cell from '@ui-base/cell';
import QMIcon from '@ui-base/icon/index';
import Tag from '@ui-base/tag';

import './index.less';
import DemoBlock from '../components/demo-block';

export default function CellDemo() {
  return (
    <View>
      <DemoBlock title='基础用法'>
        <CellGroup>
          <Cell title='单元格' value='内容' />
          <Cell title='单元格' value='内容' label='描述信息' border={false} />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title='单元格大小'>
        <CellGroup>
          <Cell title='单元格' value='内容' size='large' />
          <Cell
            title='单元格'
            value='内容'
            size='large'
            use-label-slot
            border={false}
            renderLabe={() => <View>描述信息</View>}
          ></Cell>
        </CellGroup>
      </DemoBlock>

      <DemoBlock title='展示图标'>
        <Cell title='单元格' value='内容' icon='location-o' border={false} />
      </DemoBlock>

      <DemoBlock title='展示箭头'>
        <Cell title='单元格' is-link />
        <Cell title='单元格' value='内容' is-link />
        <Cell
          title='单元格'
          is-link
          arrow-direction='down'
          value='内容'
          border={false}
        />
      </DemoBlock>

      <DemoBlock title='页面跳转'>
        <Cell title='单元格' is-link url='/pages/dashboard/index' />
        <Cell
          title='单元格'
          is-link
          url='/pages/dashboard/index'
          link-type='redirectTo'
        />
      </DemoBlock>

      <DemoBlock title='分组标题'>
        <CellGroup title='分组 1'>
          <Cell title='单元格' value='内容' />
        </CellGroup>
        <CellGroup title='分组 2'>
          <Cell title='单元格' value='内容' />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title='使用插槽'>
        <Cell
          value='内容'
          icon='shop-o'
          is-link
          renderTitle={() => (
            <View>
              <View className='title'>单元格</View>
              <Tag type="danger">标签</Tag>
            </View>
          )}
        ></Cell>
        <Cell
          title='单元格'
          border={false}
          renderIcon={() => <QMIcon name='search' />}
        ></Cell>
      </DemoBlock>

      <DemoBlock title='垂直居中'>
        <Cell center title='单元格' value='内容' label='描述信息' />
      </DemoBlock>
    </View>
  );
}
