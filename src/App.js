import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Routes from './routes';
import logo from './assets/imgs/logo.png';
import { menus } from './assets/menus.js';
import { useState } from 'react';
import 'codemirror/addon/fold/foldcode.js';  // 代码折叠
import 'codemirror/addon/fold/foldgutter.js'; // 代码折叠
import 'codemirror/addon/fold/brace-fold.js'; // 代码折叠
import 'codemirror/addon/fold/comment-fold.js'; // 代码折叠
import 'codemirror/addon/hint/javascript-hint.js'; // 自动提示
import 'codemirror/addon/hint/show-hint.js';   // 自动提示
import 'codemirror/addon/lint/lint.js';  // 错误校验
import 'codemirror/addon/lint/javascript-lint.js';  // js错误校验
import 'codemirror/addon/selection/active-line.js';  // 当前行高亮
import 'codemirror/lib/codemirror.js'
import 'codemirror/mode/javascript/javascript.js'
// css
import 'codemirror/addon/fold/foldgutter.css';  // 代码折叠
import 'codemirror/addon/hint/show-hint.css';  // 自动提示
import 'codemirror/addon/lint/lint.css'  // 代码错误提示
import 'codemirror/lib/codemirror.css' // 编辑器样式
import 'codemirror/theme/idea.css'  // 主题: idea
import 'codemirror/theme/solarized.css'

const { SubMenu } = Menu;

const { Header, Footer, Content, Sider } = Layout;

function App() {
  let navigate = useNavigate();
  const [currentHeadMenuKey, setCurrentHeadMenuKey] = useState('doc');
  const [siderMenus, setSiderMenus] = useState(menus[0].children);

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
    if (e.key === 'doc') {
      navigate(`/${e.key}/manage`);
    } else if (e.key === 'dev') {
      navigate(`/${e.key}/desc`);
    } else {
      navigate(`/${e.key}`)
    }
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
  function scrollToAnchor(anchorName) {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
  }
  function siderHandleClick(e) {
    console.log('siderHandleClick: ', e)
    const { keyPath } = e;
    const sup = keyPath[keyPath.length - 1];
    const sub = keyPath[keyPath.length - 2] || 'index';
    console.log('sub: ', sub);
    if (sub.indexOf('0') !== -1) {
      navigate(`/${currentHeadMenuKey}/${sup}`);
      scrollToAnchor('top');
    } else {
      navigate(`/${currentHeadMenuKey}/${sup}`);
      scrollToAnchor(sub);
    }
  }
  return (
    <Layout id="top">
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          zIndex: 99
        }}
      >
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['doc-manage-0']}
          defaultOpenKeys={['manage']}
          onClick={siderHandleClick}
        >
          {renderSiderMenus(siderMenus)}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} mode="horizontal" defaultSelectedKeys={['doc']} onClick={handleClick}>
            {
              menus.map(item => {
                return (
                  <Menu.Item key={item.key}>{item.name}</Menu.Item>
                )
              })
            }
          </Menu>
        </Header>
        <Content
          style={{ margin: '0px 20px', overflow: 'initial' }}
        >
          <div className="site-layout-background" style={{ padding: 24 }}>
            <Routes />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>A low code editor - tiangg</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
