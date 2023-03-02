import { ArrowUpOutlined, LinkOutlined } from "@ant-design/icons";
import { Avatar, Col, Layout, Menu, MenuProps, Popover, Row, Tag } from "antd";
import { CSSProperties, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import SetupPage from "../pages/SetupPage/SetupPage";
import StartingPage from "../pages/StartingPage/StartingPage";

const headerStyle: CSSProperties = {
  backgroundColor: "#E2D1F9",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 999,
};

const avatarStyle: CSSProperties = {
  cursor: "pointer",
};

const srcAvatar = `https://avatars.githubusercontent.com/u/86702475?v=4`;

const aboutMe = () => {
  const navigateToGithub = () => {
    window.open("https://github.com/khanh2142", "_blank");
  };

  return (
    <>
      <Tag
        color="blue"
        style={{ cursor: "pointer" }}
        onClick={navigateToGithub}
      >
        <LinkOutlined style={{ marginRight: 5 }} />
        Github
      </Tag>
    </>
  );
};

const menuList = [
  {
    label: "Hướng dẫn cài đặt",
    component: <SetupPage />,
  },
  {
    label: "Hướng dẫn khởi chạy",
    component: <StartingPage />,
  },
];

const CustomLayout = () => {
  const [current, setCurrent] = useState<number>(1);

  const onClickMenu: MenuProps["onClick"] = (e: any) => {
    document.title = menuList[e.key - 1].label;
    setCurrent(e.key);
  };
  return (
    <Layout>
      <Layout.Header style={headerStyle}>
        <Row>
          <Col span={18} offset={2}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={menuList.map((item: any, index: number) => {
                return {
                  ...item,
                  key: index + 1,
                };
              })}
              style={{
                minWidth: 400,
                backgroundColor: "transparent",
              }}
              onClick={onClickMenu}
            ></Menu>
          </Col>

          <Col
            span={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Popover content={aboutMe} title="Nguyễn Bá Khánh" trigger="click">
              <Avatar size={40} src={srcAvatar} style={avatarStyle} />
            </Popover>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content style={{ paddingTop: 70 }}>
        <Row>
          <Col span={18} offset={3}>
            <ScrollToTop
              smooth
              component={<ArrowUpOutlined style={{ fontSize: 20 }} />}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            {menuList[current - 1].component}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default CustomLayout;
