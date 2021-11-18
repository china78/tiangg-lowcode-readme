import React from 'react';
import { Typography, Divider } from 'antd';
import pageTemplate01 from '../../../../assets/imgs/pageTemplate01.png';
import pageTemplate02 from '../../../../assets/imgs/pageTemplate02.png';
const { Title } = Typography;

const PageTemplate = () => {
  return (
    <div>
      <Title level={2}>页面模版</Title>
      <p>页面模板是指已经做好的一个完整的页面框架。使用过程中，内容是可以随意替换的，包括图片、文案、颜色、交互等。</p>
      <div className="imgBox"><img style={{ width: '50%' }} src={pageTemplate01} alt="pageTemplate01" /></div>
      <p style={{ marginTop: 20 }}>需要使用时，鼠标悬浮在每个页面模板上点击下方的使用按钮即可</p>
      <div id="doc-pageTemplate-1" className="section">
        <Title level={3}>如何生成页面模版</Title>
        <Divider />
        <p>其实创建页面模板的方式很简单，我们只需在项目管理后台中，创建或编辑项目页面时，在设置栏中选择设为模板为是即可</p>
        <div className="imgBox"><img style={{ width: '80%' }} src={pageTemplate02} alt="pageTemplate02" /></div>
      </div>
    </div>
  )
}

export default PageTemplate;