import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SmileOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu({ theme }) {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string>("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div>
      <Menu
       style={{ height: "100dvh", textAlign:"center",padding:"5px" }}
        mode="vertical"
        onClick={(item) => {
          // console.log(item)
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        theme={theme}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
       
          {
            label: "Users",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Dummy",
            key: "/dummy",
            icon: <SmileOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
