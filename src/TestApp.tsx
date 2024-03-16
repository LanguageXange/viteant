import {
  Button,
  Space,
  Flex,
  Checkbox,
  Radio,
  Switch,
  Select,
  Row,
  Col,
  DatePicker,
  Modal,
  ConfigProvider,
  theme,
} from "antd";
import { useState } from "react";
import frFR from "antd/locale/fr_FR";
import zhTW from "antd/locale/zh_TW";
import enUS from "antd/locale/en_US";

type Language = "FR" | "TW" | "EN";
const languageMap = {
    FR: frFR,
    TW: zhTW,
    EN: enUS,
  };

  const options = Object.keys(languageMap).map((lan) => ({
    value: lan,
    label: lan
  }));

const TestApp: React.FC = () => {
  const { RangePicker } = DatePicker;



  const [lan, setLan] = useState<Language>("EN");
  const [checked, setChecked] = useState<boolean>(false);
  const handleClick = () => setChecked(!checked);
  const showInfo = () => {
    Modal.info({
      title: "This is a title",
      content: "I am a modal",
    });
  };
  const nodes = (
    <Flex gap="small">
      <Checkbox checked={checked} onClick={handleClick}>
        Checkbox
      </Checkbox>
      <Radio checked={checked} onClick={handleClick}>
        Radio
      </Radio>
      <Switch checked={checked} onClick={handleClick} />
    </Flex>
  );
  return (
    <ConfigProvider
      locale={languageMap[lan]}
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#55ff99",
          borderRadius: 20,
          fontSize: 18,
          motion: false, // we can disable motion
        },
       // algorithm: theme.darkAlgorithm,
      }}
    >
      <Space>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <p>We can customize the theme</p>
      </Space>

      <Col>{nodes}</Col>

      <Space wrap>
        <Button onClick={showInfo}>Show info</Button>
        <RangePicker />
      </Space>

      <Space>
        <Select
          defaultValue={lan}
          options={options}
          onChange={setLan}
        />
      </Space>
    </ConfigProvider>
  );
};
export default TestApp;
