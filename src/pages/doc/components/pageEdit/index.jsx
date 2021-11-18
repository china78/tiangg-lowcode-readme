import React from 'react';
import { Typography, Divider } from 'antd';
import pageEdit01 from '../../../../assets/imgs/pageEdit01.png';
import pageEdit02 from '../../../../assets/imgs/pageEdit02.png';
import pageEdit03 from '../../../../assets/imgs/pageEdit03.png';
import pageEdit04 from '../../../../assets/imgs/pageEdit04.png';
const { Title } = Typography;

const PageEdit = () => {
  return (
    <div>
      <Title level={2}>页面操作</Title>
      <div className="imgBox"><img style={{ width: '80%' }} src={pageEdit01} alt="workArea01" /></div>
      <div id="doc-pageEdit-1" className="section">
        <Title level={3}>组场景</Title>
        <Divider />
        <p>组场景区呈现了组件在页面中的位置、样式等实际显示状态。</p>
        <div className="imgBox"><img style={{ width: '80%' }} src={pageEdit02} alt="workArea02" /></div>
        <div className="section">
          <Title level={4}>编辑模式</Title>
          <p>编辑模式是可以对组件的拖动、缩放、复制、导出导入等编辑页面操作。以下对选中的组件操作介绍（鼠标右键点击操作区某组件）:</p>
          <p><b>•</b>【复制】 点击即可复制选中组件</p>
          <p><b>•</b>【删除】点击即可删除选中组件</p>
          <p><b>•</b>【复制样式】 点击复制样式，再选择其他组件右键选择粘贴样式即可添加上复制的样式</p>
          <p><b>•</b>【粘贴样式】 需先复制样式后，点击粘贴样式按钮后才能复制样式</p>
          <p><b>•</b>【导出节点】 导出是节点数据，需要手动复制后再对其他节点选中后选择导入节点即可</p>
          <p><b>•</b>【导入节点】 输入完整的节点数据保存即可</p>
          <p><b>•</b>【重载节点】 刷新节点的操作</p>
          <p><b>•</b>【上移、下移、置顶、置底】 控制所选节点的层级关系，即组件覆盖问题。</p>
        </div>
        <div className="section">
          <Title level={4}>操作竖排</Title>
          <p>鼠标悬浮有相应的文字描述</p>
          <p><b>•</b>【撤销】 相当于ctrl+z，到上一步</p>
          <p><b>•</b>【恢复】 相当于ctrl+y，到下一步</p>
          <p><b>•</b>【预览】 模拟真实情形页面</p>
          <p><b>•</b>【保存】 对该页面的编辑进行保存</p>
          <p><b>•</b>【参考线】 对组件的放大缩小、位置移动等操作时会出现参考线作为比对，可以控制网格颜色的选择、参考线、手机框线等是否开启</p>
        </div>
        <div className="section">
          <Title level={4}>预览模式</Title>
          <p>这里的预览模式和上面操作竖列中的预览模式的区别在于，上面的预览模式外围有模拟的手机壳和二维码。</p>
          <div className="imgBox"><img style={{ width: '80%' }} src={pageEdit03} alt="workArea03" /></div>
        </div>
      </div>
      <div id="doc-pageEdit-2" className="section">
        <Title level={3}>组件详情</Title>
        <Divider />
        <p>用于展示组件信息, 详见【组件】</p>
      </div>
      <div id="doc-pageEdit-3" className="section">
        <Title level={3}>页面设置</Title>
        <Divider />
        <p>这里的页面设置是根据组场景中的编辑的页面生成信息。</p>
        <div className="imgBox"><img style={{ width: '80%' }} src={pageEdit04} alt="workArea04" /></div>
      </div>
    </div>
  )
}

export default PageEdit;