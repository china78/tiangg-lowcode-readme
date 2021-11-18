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
  const [currentHeadMenuKey, setCurrentHeadMenuKey] = useState('doc');
  const [siderMenus, setSiderMenus] = useState(menus[0].children);
  const [keyPath, setKeyPath] = useState(['项目管理', '入口']);
  const [currentMenuKey, setCurrentMenuKey] = useState('manage');
  console.log('menus: ', menus)

  function changeSiderMenus(key) {
    return menus.map(item => {
      if (item.key === key) {
        return setSiderMenus(item.children);
      }
      return null;
    })
  }
  function handleClick(e) {
    console.log('e: ', e);
    setCurrentHeadMenuKey(e.key);
    navigate(`/${e.key}`);
    changeSiderMenus(e.key);
  }
  function renderSiderMenus(data) {
    return data.map(item => {
      if (item?.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {
              item && item.children && item.children.map(ele => {
                return <Menu.Item key={ele.key}>{ele.name}</Menu.Item>
              })
            }
          </SubMenu>
        )
      } else {
        return <Menu.Item key={item.key}>{item.title}</Menu.Item>
      }
    })
  }
  function siderHandleClick(e) {
    console.log('siderHandleClick: ', e)
    const { keyPath } = e;
    const sup = keyPath[keyPath.length - 1];
    const sub = keyPath[keyPath.length - 2] || 'index';
    navigate(`/${currentHeadMenuKey}/${sup}/${sub}`)
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
            defaultSelectedKeys={['doc-manage-1']}
            defaultOpenKeys={['manage']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={siderHandleClick}
          >
            {renderSiderMenus(siderMenus)}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {
              keyPath.map((item, index) => {
                return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
              })
            }
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
