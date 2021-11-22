import React from 'react';
import { Typography, Divider } from 'antd';
const { Title } = Typography;

const Manage = () => {
  return (
    <div>
      <Title level={2}>项目管理</Title>
      <p>
        tiangg-admin项目是tiangg-editor的入口，提供了项目管理、资源管理、数据统计等功能。
      </p>
      <div id="doc-manage-1" className="section">
        <Title level={3}>入口</Title>
        <Divider />
        <p>由tiangg-admin后台进入，使用邮箱密码登陆系统。</p>
      </div>
      <div id="doc-manage-2" className="section">
        <Title level={3}>概念</Title>
        <Divider />
        <p>只要理解以下概念，管理后台的具体操作就很简单了。</p>
        <div className="section">
          <Title level={4}>项目</Title>
          <p>项目内可以添加页面。</p>
          <p>项目类似于文件夹，包含一系列页面，通常来说这些页面功能相关或类似，或者在一个大功能里各自承担部分功能。</p>
        </div>
        <div className="section">
          <Title level={4}>页面</Title>
          <p>页面是内容的直接载体，编辑器的操作对象就是页面。一个或者多个页面构成一个项目。</p>
          <p>用户最终访问的就是页面。</p>
        </div>
        <div className="section">
          <Title level={4}>团队</Title>
          <p>添加一个团队，团队内所有成员可以访问（编辑）这个团队所有成员公开的项目。</p>
          <p>团队是一系列项目的所有者。</p>
        </div>
        <div className="section">
          <Title level={4}>成员</Title>
          <p>成员指的是对项目拥有一定权限的人，项目中的成员可以是项目所属团队的成员，也可以是一些是特别添加的对该项目拥有权限的人。</p>
          <p>比如前端团队下存在一个数智发改的项目，并特别添加了另一个团队的某某作为开发者，前端团队所有成员和某某即为这个项目的成员。</p>
        </div>
        <div className="section">
          <Title level={4}>资源</Title>
          <p>资源包含图片、音频、视频等媒体资源以及脚本脚本资源，可在编辑器中使用。</p>
        </div>
      </div>
      <div id="doc-manage-3" className="section">
        <Title level={3}>新建项目</Title>
        <Divider />
        <p>创建项目-添加组-项目名称-描述</p>
        <p>以上简单介绍了项目管理的内容，更多细节还需在具体使用时慢慢探索。</p>
      </div>
    </div>
  )
}

export default Manage;