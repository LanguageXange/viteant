import SideMenu from "./components/SideBar";
import MainContent from "./components/MainContent";
import React, { useState } from "react";
import { Layout, Flex, Switch, ConfigProvider, theme, Space, Divider } from "antd";

const { Header, Footer, Sider, Content } = Layout;

import "./App.css";
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  display:"flex",
  maxHeight: 64,
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "10px",
};

const layoutStyle = {
  overflow: "hidden",
  height: "100dvh",
};

const App: React.FC = () => {
  const changeTheme = (value: boolean) => {
    setMenuTheme(value ? "dark" : "light");
  };
  const [menuTheme, setMenuTheme] = useState("light");
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleChange = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Flex gap="middle">
        <Layout style={layoutStyle}>
          <Sider width="20%">
            <SideMenu theme={menuTheme} />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
    
              <Switch onChange={handleChange} /> Toggle Config Theme
              <Switch onChange={changeTheme} /> Toggle Menu Theme
         
             
            </Header>
            <Content style={contentStyle}>
              {" "}
              <MainContent />
            </Content>
            <Footer style={footerStyle}>Footer: Ant Design + Vite Demo</Footer>
          </Layout>
        </Layout>
      </Flex>
    </ConfigProvider>
  );
};
export default App;
