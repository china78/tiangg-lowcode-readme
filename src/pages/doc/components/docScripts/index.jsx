import React from 'react';
import { Typography, Divider } from 'antd';
import docScript01 from '../../../../assets/imgs/docScript01.png';
import docScript02 from '../../../../assets/imgs/docScript02.png';
import docScript04 from '../../../../assets/imgs/docScript04.png';
import docScript05 from '../../../../assets/imgs/docScript05.png';
import docScript06 from '../../../../assets/imgs/docScript06.png';
const { Title } = Typography;

const DocScript = () => {
  return (
    <div>
      <Title level={2}>脚本</Title>
      <p>考虑如下场景，向页面添加了10个按钮，点击这些按钮时需要分别记录点击时间、组件id并发送到服务端（即记录点击日志并提交）。需求拆分一下：1. 由于按钮组件本身不具备点击日志记录和发送功能，需要实现此功能；2. 需要为这一组按钮都添加此类似功能。</p>
      <p>脚本系统为此而生。</p>
      <p><b>•</b> 脚本可以扩展组件功能。</p>
      <p><b>•</b> 脚本可以被复用。</p>
      <p><b>•</b> 脚本几乎具备完全的组件控制能力，目前唯一的限制是只支持es5语法和特性。</p>
      <div id="doc-docScripts-1" className="section">
        <Title level={3}>使用</Title>
        <Divider />
        <div className="imgBox"><img style={{ width: '30%' }} src={docScript01} alt="docScript01" /></div>
        <p>该模块提供了脚本库，用户可以自行选择使用；也可以自行开发，生成脚本模版。</p>
      </div>
      <div id="doc-docScripts-2" className="section">
        <Title level={3}>脚本相关操作</Title>
        <Divider />
        <div className="imgBox"><img style={{ width: '30%' }} src={docScript02} alt="docScript02" /></div>
        <div className="section">
          <Title level={4}>保存模版</Title>
          <p>点击保存脚本模版图标，即可生成新的模版，展示在脚本库里，供其他人员使用。</p>
        </div>
        <div className="section">
          <Title level={4}>重命名</Title>
          <p>点击重命名图标，即可重新编辑脚本名称。</p>
        </div>
        <div className="section">
          <Title level={4}>删除</Title>
          <p>点击删除图标，即可删除该脚本。</p>
        </div>
      </div>
      <div id="doc-docScripts-3" className="section">
        <Title level={3}>开发</Title>
        <Divider />
        <p>除系统提供的组件以外，也可以自己编写脚本。</p>
        <p>详细说明见脚本开发</p>
      </div>
      <div id="doc-docScripts-4" className="section">
        <Title level={3}>示例</Title>
        <Divider />
        <p>这里具体介绍一下几个常用脚本的使用：</p>
        <div className="section">
          <Title level={4}>项目内部与外部跳转</Title>
          <p>项目内页面间跳转操作。</p>
          <div className="imgBox"><img style={{ width: '70%' }} src={docScript04} alt="docScript04" /></div>
          <div className="imgBox"><img style={{ width: '70%' }} src={docScript05} alt="docScript05" /></div>
          <div className="imgBox"><img style={{ width: '70%' }} src={docScript06} alt="docScript06" /></div>
        </div>
      </div>
    </div>
  )
}

export default DocScript;