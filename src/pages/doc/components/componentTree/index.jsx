import React from 'react';
import { Typography, Divider } from 'antd';
import componentTree01 from '../../../../assets/imgs/componentTree01.png';
import componentTree02 from '../../../../assets/imgs/componentTree02.png';
const { Title } = Typography;

const ComponentTree = () => {
  return (
    <div>
      <Title level={2}>组件树</Title>
      <p>如果我们把每个组件作为一片树叶，定义被包含组件为下级组件，相应的，另一个则为上级组件，上下级组件之间的联系作为树枝，最上级的组件（即根组件）为树根，那么，所有组件聚在一起呈现出的是一个倒置树的结构，我们称之为组件树，绘制为图像即工作区左下角的组件树。</p>
      <div className="imgBox"><img style={{ width: '50%' }} src={componentTree01} alt="componentTree01" /></div>
      <p>关于组件树我们仅需要了解以下几点：</p>
      <p>1. 组件是有层级的，被包含的为下级组件，相应的，另一个则为上级组件</p>
      <p>2. 非悬浮（fixed）组件相对于上级组件的左上角定位</p>
      <p>3. 视觉上，下级组件覆盖上级组件，同级组件排列靠后的覆盖排列靠前的组件</p>
      <p>4. 对上级组件的复制、删除操作会一起作用于所有下级组件。即复制上级组件时，所有下级组件也被复制；删除上级组件时，所有下级组件一起被删除。</p>
      <p></p>
      <div id="doc-componentTree-1" className="section">
        <Title level={3}>组件树相关的操作</Title>
        <Divider />
        <p>工作区左下角的组件树不仅指示了组件的层级结构，类似于操作区的组件，组件树同样也提供了一些操作入口。</p>
        <div className="imgBox"><img style={{ width: '50%' }} src={componentTree02} alt="componentTree02" /></div>
        <div className="section">
          <Title level={4}>选中</Title>
          <p>点击组件树某节点即选中这个组件，同时，在操作区该组件高亮显示。将鼠标悬停于某节点之上，出现一排操作图标（如果不清楚各个图标的作用，将鼠标移动到小图标上，稍作等待，即出现功能提示）。</p>
        </div>
        <div className="section">
          <Title level={4}>重命名</Title>
          <p>点击重命名图标，可以重新编辑节点名称，回车键保存。</p>
        </div>
        <div className="section">
          <Title level={4}>复制</Title>
          <p>点击复制按钮即可复制该组件至同级。</p>
        </div>
        <div className="section">
          <Title level={4}>复制组件id</Title>
          <p>操作同复制，提供快速获取组件 id 的功能。</p>
        </div>
        <div className="section">
          <Title level={4}>删除</Title>
          <p>点击“删除”即可删除该组件及下级所有组件。</p>
        </div>
        <div className="section">
          <Title level={4}>加锁</Title>
          <p>点击锁的图标可以控制该节点是否锁定，若锁定状态则无法选择该节点。</p>
        </div>
        <div className="section">
          <Title level={4}>拖拽</Title>
          <p>按住某个节点拖动，拖到某个节点上方或者两个节点之间，松开鼠标，即可移动组件在组件树中的位置。至于拖动组件到另一组件上方与两个组件之间的区别请自行尝试。</p>
        </div>
      </div>
    </div>
  )
}

export default ComponentTree;