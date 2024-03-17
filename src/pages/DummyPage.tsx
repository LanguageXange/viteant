import { Button } from "antd";
import {
  QuestionCircleOutlined,
  BarChartOutlined,
  HighlightOutlined,
  EditFilled,
} from "@ant-design/icons";
import { FloatButton, Typography } from "antd";
import React, { useState } from "react";
// https://ant.design/components/icon

const { Title, Paragraph } = Typography;
const DummyPage: React.FC = () => {
  const [paraText, setParaText] = useState("This is a paragraph");
  const [titleText, setTitleText] = useState("This is a title");
  return (
    <div>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: "click to edit text",
          onChange: setParaText,
          maxLength: 50,
          autoSize: { maxRows: 4, minRows: 2 },
        }}
        style={{ margin: "10px 30px" }}
      >
        {paraText}
      </Paragraph>

      <Title
        editable={{
          icon: <EditFilled />,
          tooltip: "click to edit text",
          onChange: setTitleText,
          enterIcon: null,
        }}
        style={{ margin: "30px" }}
        mark
        level={1}
      >
        {titleText}
      </Title>
      <Button type="dashed"> Dashed</Button>
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        tooltip={() => <p>questions</p>}
      />
      <FloatButton
        icon={<BarChartOutlined />}
        type="default"
        tooltip={() => <p>default float button</p>}
        style={{ right: 85 }}
      />
    </div>
  );
};

export default DummyPage;
