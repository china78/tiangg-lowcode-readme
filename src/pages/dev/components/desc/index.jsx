import React from 'react';
import { Typography, Divider } from 'antd';
const { Title } = Typography;

const Desc = () => {
  return (
    <div>
      <Title level={2}>介绍</Title>
      <p>tiangg提供了完全的编程接入能力，开发者可以自行开发组件，编写脚本。</p>
      <p>组件是tiangg项目的基石，除系统提供的组件以外，开发者可以自行开发组件并发布使用。详细介绍见组件开发。</p>
      <p>脚本对组件功能进行扩展，使用场景异常丰富。我们提供了脚本开发的详细说明。</p>
      <p>由于tiangg系统是基于 vue 框架开发的，组件和脚本机制也都依赖于 vue 的一些特性，因此，tiangg组件或脚本开发者需具有一定 vue 开发基础。</p>
    </div>
  )
}

export default Desc;