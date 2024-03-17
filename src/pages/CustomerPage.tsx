import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers } from "../api";
import type { TableProps } from "antd";

// https://ant.design/components/table

interface DataType {
  image: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  birthDate: string;
  age: number;
  eyeColor: string;
  height: number;
}
const cols: TableProps<DataType>["columns"] = [
  {
    title: "Avatar",
    dataIndex: "image",
    render: (link) => <Avatar src={link} />,
  },
  {
    title: "First Name",
    dataIndex: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
  },
  {
    title: "Gender",
    dataIndex: "gender",

    render: (g) => (g === "male" ? "M" : "F"),
  },
  { title: "Height", dataIndex: "height" },
  { title: "Date of Birth", dataIndex: "birthDate", responsive:['lg'] },
  { title: "Age", dataIndex: "age", responsive:['lg']  },

  { title: "Eye Color", dataIndex: "eyeColor", responsive:['lg']  },
];

function Customers() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setData(res.users);
      setLoading(false);
    });
  }, []);
  const userData: DataType[] = data.map(
    ({ firstName, lastName, birthDate, gender, id, image, age, height, eyeColor }) => ({
      firstName,
      lastName,
      birthDate,
      gender,
      key: id, // to get rid of key warning
      image,
      eyeColor,
      age,
      height
    })
  );

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={2}>Users</Typography.Title>
      <Table
        loading={loading}
        columns={cols}
        dataSource={userData}
        pagination={{
          pageSize: 6,
        }}
      ></Table>
    </Space>
  );
}
export default Customers;
