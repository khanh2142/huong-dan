import { Menu, MenuProps, Typography } from "antd";
import { useState } from "react";
import NodeJsSetupPage from "./components/nodejs_setup/NodeJsSetupPage";
import VSCodeSetupPage from "./components/vscode_setup/VSCodeSetupPage";
const { Text, Link } = Typography;

const items = [
  {
    label: "Cài đặt NodeJs",
    key: 1,
    component: <NodeJsSetupPage />,
  },
  {
    label: "Cài đặt Visual Studio Code",
    key: 2,
    component: <VSCodeSetupPage />,
  },
];

const SetupPage = () => {
  const [current, setCurrent] = useState<number>(1);

  const onClick: MenuProps["onClick"] = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current.toString()]}
        mode="horizontal"
        items={items}
        style={{ backgroundColor: "transparent" }}
      />
      {items[current - 1].component}
    </>
  );
};

export default SetupPage;
