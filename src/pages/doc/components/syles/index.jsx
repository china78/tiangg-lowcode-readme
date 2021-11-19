import React from 'react';
import { Typography, Divider } from 'antd';
import styles01 from '../../../../assets/imgs/styles01.png';
import styles02 from '../../../../assets/imgs/styles02.png';
import styles03 from '../../../../assets/imgs/styles03.png';
import styles04 from '../../../../assets/imgs/styles04.png';
import styles05 from '../../../../assets/imgs/styles05.png';
import styles06 from '../../../../assets/imgs/styles06.png';
import styles07 from '../../../../assets/imgs/styles07.png';
import styles08 from '../../../../assets/imgs/styles08.png';
import styles09 from '../../../../assets/imgs/styles09.png';
const { Title } = Typography;

const Styles = () => {
  return (
    <div>
      <Title level={2}>样式</Title>
      <p>区别于前述组件属性，对于所有组件，其位置、大小、背景等信息生而有之，所以，对于此种信息，我们称之为样式。</p>
      <p>选中组件，点击组件配置区样式导航栏即可见样式面板。样式分为基础模式、高级模式、代码。</p>
      <div className="imgBox"><img style={{ width: '40%' }} src={styles01} alt="styles01" /></div>
      <div id="doc-syles-1" className="section">
        <Title level={3}>基础模式</Title>
        <Divider />
        <p>以下对每个样式作以详细说明。</p>
        <p><b>注意：每个样式配置项末尾的小锁图标代表是否启用该样式，锁打开即启用，锁闭即停用。</b></p>
        <div className="section">
          <Title level={4}>位置</Title>
          <div className="imgBox"><img style={{ width: '50%' }} src={styles02} alt="styles02" /></div>
          <p>介绍组件操作时已说明过可以通过拖移组件可以来设置组件位置，其位置信息最终体现为样式中 X 和 Y 的取值，因此，通过修改 X 和 Y 的值同样可以达到改变组件位置的目的，其中 X、Y 分别为相对于父级组件（见组件树）左上角的水平距离和垂直距离。</p>
        </div>
        <div className="section">
          <Title level={4}>大小</Title>
          <p>修改 宽 和 高 的值改变组件大小。</p>
        </div>
        <div className="section">
          <Title level={4}>悬浮</Title>
          <p>勾选此项以后组件位置固定，不随页面一起滚动。</p>
          <p>注意：编辑模式下，长页面的滚动并非真实滚动，所以看起来悬浮（fixed）组件仍然会随之滚动。如需查看实际效果，暂存页面以后，点击操作区右侧眼睛图标即可查看。</p>
        </div>
        <div className="section">
          <Title level={4}>透明度</Title>
          <p>拖动进度条，可调整组件的透明度。</p>
        </div>
        <div className="section">
          <Title level={4}>对齐</Title>
          <div className="imgBox"><img style={{ width: '50%' }} src={styles03} alt="styles03" /></div>
          <p>对齐操作用来快速定位元素到特殊位置，包括水平居中、垂直居中、左对齐、右对齐、顶对齐、底对齐以及快速修改组件视觉层级。如果不清楚每个按钮的功能，将鼠标移动到图标之上，即可显示功能提示。</p>
        </div>
        <div className="section">
          <Title level={4}>背景</Title>
          <div className="imgBox"><img style={{ width: '50%' }} src={styles04} alt="styles04" /></div>
          <p>背景设置分为图片设置和颜色设置，两者可以共存，图片会覆盖在颜色之上。设置项如下：</p>
          <p><b>•</b>【图片】 <em>输入 背景图片地址 或 上传 本地图片。</em></p>
          <p><b>•</b>【填充】 <em>选择 背景图片的填充类型，填充类型决定了图片在背景内的显示方式。将鼠标放置在各个选项即可查看填充类型说明。</em></p>
          <p><b>•</b>【颜色】 <em>选择 或 输入 背景颜色。</em></p>
        </div>
        <div className="section">
          <Title level={4}>边框</Title>
          <div className="imgBox"><img style={{ width: '50%' }} src={styles05} alt="styles04" /></div>
          <p><b>•</b>【宽度】 <em>输入 边框的线宽。</em></p>
          <p><b>•</b>【样式】 <em>选择 框线的类型，如实线、虚线、点划线等。</em></p>
          <p><b>•</b>【颜色】 <em>选择 或 输入 框线颜色。</em></p>
          <p><b>•</b>【圆角】 <em>输入 边框的圆角大小。</em></p>
        </div>
        <div className="section">
          <Title level={4}>文字样式</Title>
          <div className="imgBox"><img style={{ width: '50%' }} src={styles06} alt="styles05" /></div>
          <p><b>•</b>【字体】 <em>选择 字体。</em></p>
          <p><b>•</b>【对齐】 <em>选择 文本对齐方式，指定文本在组件内的排布方式，如居中。需要区别于对齐操作（对齐操作针对组件位置，而非文本对齐方式）。</em></p>
          <p><b>•</b>【加粗】 <em>选择 加粗程度。</em></p>
          <p><b>•</b>【字号】 <em>输入 字体大小。</em></p>
          <p><b>•</b>【行高】 <em>输入 一个文本行的高度，它决定行间距。</em></p>
          <p><b>•</b>【颜色】 <em>选择 或 输入 文本颜色。</em></p>
        </div>
        <div className="section">
          <Title level={4}>边距</Title>
          <p>现行组件定位模式下，如无对边距的充分理解，不建议使用。如有需求，尽量采用修改组件大小或者位置来实现。</p>
          <div className="imgBox"><img style={{ width: '50%' }} src={styles07} alt="styles07" /></div>
          <p><b>•</b>【内边距】 <em>输入 组件内容区到边框的距离</em></p>
          <p><b>•</b>【外边距】 <em>输入 组件外围的空白区域的大小</em></p>
        </div>
      </div>
      <div id="doc-syles-2" className="section">
        <Title level={3}>高级模式</Title>
        <Divider />
        <div className="imgBox"><img style={{ width: '50%' }} src={styles08} alt="styles08" /></div>
        <p>高级模式主要是对于基础模式的一个扩展，例如：组件溢出（overflow）、定位（position）、内外边距（padding、margin）等处理，具体的就不一一展开说明了。</p>
      </div>
      <div id="doc-syles-3" className="section">
        <Title level={3}>代码</Title>
        <Divider />
        <p>熟悉css开发的同学，可使用代码模块直接对组件进行样式编写。</p>
        <p><b>注意：在编写完样式之后，需要点击保存按钮。</b></p>
        <div className="imgBox"><img style={{ width: '50%' }} src={styles09} alt="styles09" /></div>
      </div>
    </div>
  )
}

export default Styles;