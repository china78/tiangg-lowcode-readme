import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import Routes from './routes';

const { TabPane } = Tabs;

function App() {
  let navigate = useNavigate();

  function callback(key) {
    navigate(`/${key}`);
  }
  return (
    <div className="App">
      <Tabs defaultActiveKey="" centered onChange={callback}>
        <TabPane tab="使用手册" key="" />
        <TabPane tab="开发" key="dev" />
      </Tabs>
      <Routes />
    </div>
  );
}

export default App;
