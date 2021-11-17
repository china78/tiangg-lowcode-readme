import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Routes from './routes';
import { menus } from './assets/menus.js';
import { useState } from 'react';

const { SubMenu } = Menu;
const { Header, Footer, Content, Sider } = Layout;

function App() {
  let navigate = useNavigate();
  const [siderMenus, setSiderMenus] = useState(menus[0].children);
  console.log('menus: ', menus)

  function handleClick(e) {
    console.log('e: ', e);
    navigate(`/${e.key}`);
  }
  function renderSiderMenus(data) {
    return data.map(item => {
      return (
        <SubMenu key={item.key} title={item.title}>
          {
            item && item.children && item.children.map(ele => {
              return <Menu.Item key={ele.key}>{ele.name}</Menu.Item>
            })
          }
        </SubMenu>
      )
    })
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['doc']} onClick={handleClick}>
          {
            menus.map(item => {
              return <Menu.Item key={item.key}>{item.name}</Menu.Item>
            })
          }
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {renderSiderMenus(siderMenus)}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
