import React from 'react';
import { Typography, Divider } from 'antd';
import canvas1 from '../../../../assets/imgs/canvas1.gif';
import canvas2 from '../../../../assets/imgs/canvas2.gif';
const { Title } = Typography;

const Canvas = () => {
  return (
    <div>
      <Title level={2}>画布</Title>
      <div className="imgBox"><img style={{ width: '70%' }} src={canvas1} alt="canvas1" /></div>
      <p><em>tiangg画布切换功能</em></p>
      <p>引入画布概念以后，tiangg内置了 4 个画布，其中三个为移动端画布，剩下一个为桌面端画布。参见题图。</p>
      <div id="doc-canvas-1" className="section">
        <Title level={3}>移动端画布</Title>
        <Divider />
        <p>tiangg编辑器内置了三个尺寸的移动端画布，分别为 320 x 500、360 x 600、414 x 700，根据自己的需求和设计稿的尺寸（以方便换算为原则）选用合适的画布即可。</p>
      </div>
      <div id="doc-canvas-2" className="section">
        <Title level={3}>PC端画布</Title>
        <Divider />
        <p><em>PC端画布, 巴拉巴拉... 写的好累...</em></p>
        <div className="section">
          <Title level={4}>浮动操作面板</Title>
          <p>将工作区切换到 PC 布局时，可以看到，除场景区以外大部分操作面板都以浮动面板形式存在，这样给场景区留下了足够的空间来预览和操作组件。浮动操作面板可以停靠在屏幕两侧，折叠隐藏到屏幕以外，也可以拖动到工作区任意位置。另外，将鼠标移动到任意浮动面板之上，该浮动面板即会置于顶层，方便用户操作。</p>
        </div>
        <div className="section">
          <Title level={4}>“楼层模式”</Title>
          <div className="imgBox"><img style={{ width: '70%' }} src={canvas2} alt="canvas2" /></div>
          <p>在属性面板，可以为当前组件设置布局模式。布局模式决定了其直接子组件的位置排布方式，当设置为”楼层模式“时，子组件如楼层般依次向下扩展，当设置为”自由模式“时，子组件上下堆叠，位置可自由挪动，也就是此前的默认布局方式。</p>
          <p>设置了”楼层模式“的组件，因其子组件依次向下排布，我们可以将该组件的高度禁用（样式面板-高-禁用，实际被设置为 auto），这样组件就可以根据子组件的累加高度自动获得高度。</p>
          <p>实践下来，”楼层模式“更适合桌面端页面的制作，当切换画布到桌面画布时，如果根组件（root）的布局模式不是”楼层模式“，则会自动切换到楼层模式</p>
          <p>楼层模式并非只适用于桌面端页面的制作，对于移动端页面，同样可以使用”楼层模式“，根据需求在根组件（root）上使用或者局部使用（作用于非根组件）。</p>
        </div>
        <div className="section">
          <Title level={4}>居中</Title>
          <p>对于应用了”楼层模式“的组件，其子组件样式面板多了一个居中选项，开启后，组件将自适应不同宽度设备居中显示。</p>
        </div>
      </div>
    </div>
  )
}

export default Canvas;