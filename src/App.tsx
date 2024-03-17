import SideMenu from "./components/SideBar";
import MainContent from "./components/MainContent";
import React, { useState } from "react";
import { Layout, Flex, Switch, ConfigProvider, theme, Typography } from "antd";

const { Header, Footer, Sider, Content } = Layout;

import "./App.css";
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  display: "flex",
  maxHeight: 64,
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "60px",
  padding: "20px",
  overflow: "auto",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "10px",
  borderTop: "1px solid #666",
};

const layoutStyle = {
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
  // https://ant.design/components/layout#design-token
  // https://github.com/ant-design/ant-design/issues/39495
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        components: {
          // Typography: {
          //   colorText: "#dcdcdc",
          // },
          Layout: {
            headerBg: "transparent",
          },
        },
      }}
    >
      <Flex gap="middle">
        <Layout style={layoutStyle}>
          <Sider width="15%" breakpoint="lg">
            <SideMenu theme={menuTheme} />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <Flex gap={"middle"}>
                <div>
                  <Switch
                    onChange={handleChange}
                    className="switch"
                    size="small"
                  />

                  <Typography.Text>Toggle Theme</Typography.Text>
                </div>

                <div>
                  <Switch
                    onChange={changeTheme}
                    className="switch"
                    size="small"
                  />
                  <Typography.Text>Toggle Menu Theme</Typography.Text>
                </div>
              </Flex>
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
