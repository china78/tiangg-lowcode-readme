import React from 'react';
import { Typography, Divider } from 'antd';
import workArea01 from '../../../../assets/imgs/workArea01.png';
const { Title } = Typography;

const WorkArea = () => {
  return (
    <div>
      <Title level={2}>工作区概览</Title>
      <div className="imgBox"><img style={{ width: '100%' }} src={workArea01} alt="workArea01" /></div>
      <div id="doc-workArea-1" className="section">
        <Title level={3}>组件</Title>
        <Divider />
        <p>工作区左侧上方为组件区，提供了基础组件和合成组件。</p>
      </div>
      <div id="doc-workArea-2" className="section">
        <Title level={3}>组件树</Title>
        <Divider />
        <p>工作区左侧下方切换栏左边为组件树，呈现页面内的组件层级结构。</p>
      </div>
      <div id="doc-workArea-3" className="section">
        <Title level={3}>页面模版</Title>
        <Divider />
        <p>工作区左侧下方切换栏右边为页面模版，主要为了快速生成页面。</p>
      </div>
      <div id="doc-workArea-4" className="section">
        <Title level={3}>页面操作</Title>
        <Divider />
        <p>页面操作区呈现了组件在页面中的位置、样式等实际显示状态，提供了组件的拖动、缩放、复制、导出导入等操作功能。</p>
      </div>
      <div id="doc-workArea-5" className="section">
        <Title level={3}>组件配置</Title>
        <Divider />
        <p>组件配置区包括配置面板，通用样式面板和脚本面板。配置面板可以配置组件属性、添加进出场动画，通用样式面板可以定义组件的位置、大小、背景文本样式等，脚本面板可以选择已有脚本或创建脚本，为组件提供额外的功能。</p>
      </div>
    </div>
  )
}

export default WorkArea;