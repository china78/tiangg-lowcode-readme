import React from 'react';
import { Typography, Divider } from 'antd';
import componentAttr01 from '../../../../assets/imgs/componentAttr01.png';
import componentAttr02 from '../../../../assets/imgs/componentAttr02.png';
import componentAttr03 from '../../../../assets/imgs/componentAttr03.png';
import componentAttr04 from '../../../../assets/imgs/componentAttr04.png';
const { Title } = Typography;

const ComponentAttribute = () => {
  return (
    <div>
      <Title level={2}>组件属性</Title>
      <p>当某个组件被选中时，工作区右侧就出现了组件配置面板。</p>
      <div className="imgBox"><img style={{ width: '40%' }} src={componentAttr01} alt="componentAttr01" /></div>
      <div id="doc-componentAttribute-1" className="section">
        <Title level={3}>组件更新</Title>
        <Divider />
        <p>若当前组件版本并不是最新版本，则在面板最上方会出现组件更新提示，可一键更新。</p>
      </div>
      <div id="doc-componentAttribute-2" className="section">
        <Title level={3}>基础信息</Title>
        <Divider />
        <p>面板上方为组件基础信息，包括组件id、名称、和可见性，其中组件名称和可见性可变更，但如无必要不建议切换组件id，需确保组件id的。</p>
      </div>
      <div id="doc-componentAttribute-3" className="section">
        <Title level={3}>属性设置</Title>
        <Divider />
        <p>属性指的是一些组件运行所必要的参数，如对于图片组件，图片地址就是一个重要的属性。</p>
        <div className="imgBox"><img style={{ width: '90%' }} src={componentAttr02} alt="componentAttr02" /></div>
        <div className="imgBox"><img style={{ width: '90%' }} src={componentAttr04} alt="componentAttr04" /></div>
        <p>中间为属性设置区，这里汇集了组件所需的全部参数，可通过输入，选择、切换、勾选等操作进行配置。具体配置请参考各组件的配置项。有两点需要特别说明：1. 多选属性选择完成后需要点击选框内部（区别于选项）才能最终确认所选；2. 部分操作类属性（如点击事件）添加具体操作以后可能需要填写相应操作的参数（如，网页跳转需要填写跳转地址）。</p>
      </div>
      <div id="doc-componentAttribute-4" className="section">
        <Title level={3}>事件管理</Title>
        <Divider />
        <p>事件管理支持自定义事件响应方式，增强了组件的可扩展性。</p>
        <div className="imgBox"><img style={{ width: '45%' }} src={componentAttr03} alt="componentAttr03" /></div>
      </div>
    </div>
  )
}

export default ComponentAttribute;