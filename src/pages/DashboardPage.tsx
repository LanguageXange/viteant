import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography, Flex } from "antd";
import { ReactNode, useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../api";
// https://react-chartjs-2.js.org/
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [data, setData] = useState({
    orders: 0,
    inventory: 0,
    customers: 0,
    revenue: 0,
  });

  useEffect(() => {
    Promise.all([getOrders(), getInventory(), getCustomers()]).then(
      ([orderRes, inventoryRes, customerRes]) => {
        setData({
          orders: orderRes.total,
          inventory: inventoryRes.total,
          customers: customerRes.total,
          revenue: orderRes.discountedTotal,
        });
      }
    );
  }, []);
  // destructure
  const { orders, inventory, customers, revenue } = data;
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={2}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={inventory}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customer"}
          value={customers}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={revenue}
        />
      </Space>
      <Space className="dashboard-charts">
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  );
}

type CardProps = {
  title: string;
  value: number;
  icon: ReactNode;
};
function DashboardCard({ title, value, icon }: CardProps) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  const ordersData = dataSource.map(({ title, quantity, id, price }) => ({
    title,
    quantity,
    price,
    key: id,
  }));

  return (
    <>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
         
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
      
          },
          {
            title: "Price",
            dataIndex: "price",
       
          },
        ]}
        loading={loading}
        dataSource={ordersData}
        pagination={false}
      ></Table>
    </>
  );
}

type revenueType = {
  labels: string[];
  datasets: {
    label: string;
    data: string[];
    backgroundColor: string;
  }[];
};
function DashboardChart() {
  const [reveneuData, setReveneuData] = useState<revenueType>({
    labels: [],
    datasets: [],
  });
  type Cart = {
    total: number;
    userId: number;
  };
  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart: Cart) => {
        console.log(cart);
        return `#${cart.userId}`;
      });
      const data = res.carts.map((cart: Cart) => {
        return cart.total;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "#4c0ffb",
            hoverBackgroundColor: "#f5c77e",
            barThickness: 5,
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    layout: {
      padding: 2,
    },

    plugins: {
      legend: {
        display: false,
       // position: "top",
      },

      title: {
        display: true,
        text: "Order Revenue",
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <Card className="chart-card">
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}
export default Dashboard;
