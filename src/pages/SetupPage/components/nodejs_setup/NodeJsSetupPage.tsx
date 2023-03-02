import { DownloadOutlined, LinkOutlined } from "@ant-design/icons";
import { Col, Divider, Image, List, Row, Space, Tag, Typography } from "antd";
import { CSSProperties } from "react";
const { Text, Link } = Typography;

import pic2 from "../../../../assets/images/nodejs/nodejs_setup_1.png";
import pic11 from "../../../../assets/images/nodejs/nodejs_setup_10.png";
import pic1 from "../../../../assets/images/nodejs/nodejs_setup_11.png";
import pic3 from "../../../../assets/images/nodejs/nodejs_setup_2.png";
import pic4 from "../../../../assets/images/nodejs/nodejs_setup_3.png";
import pic5 from "../../../../assets/images/nodejs/nodejs_setup_4.png";
import pic6 from "../../../../assets/images/nodejs/nodejs_setup_5.png";
import pic7 from "../../../../assets/images/nodejs/nodejs_setup_6.png";
import pic8 from "../../../../assets/images/nodejs/nodejs_setup_7.png";
import pic9 from "../../../../assets/images/nodejs/nodejs_setup_8.png";
import pic10 from "../../../../assets/images/nodejs/nodejs_setup_9.png";

const imageStyle: CSSProperties = {
  maxWidth: 900,
};

const NodeJsSetupPage = () => {
  return (
    <Row style={{ paddingBottom: 10 }}>
      <Col>
        <h1>Hướng dẫn cài đặt NodeJs</h1>
        <h3>Đối với từng hệ điều hành, chúng ta sẽ có bản cài đặt riêng</h3>
        <List>
          <List.Item>
            <Tag color="blue">
              <DownloadOutlined style={{ fontSize: 18, marginRight: 10 }} />
              <Link href="https://nodejs.org/download/release/v16.14.2/node-v16.14.2-x86.msi">
                NodeJs v16.14.2 - 32bit
              </Link>
            </Tag>
          </List.Item>
          <List.Item>
            <Tag color="blue">
              <DownloadOutlined style={{ fontSize: 18, marginRight: 10 }} />
              <Link href="https://nodejs.org/download/release/v16.14.2/node-v16.14.2-x64.msi">
                NodeJs v16.14.2 - 64bit
              </Link>
            </Tag>
          </List.Item>
        </List>
        <h3>Đầu tiên, chúng ta sẽ mở file cài đặt lên</h3>
        <Image src={pic1} style={imageStyle} />
        <h3>Màn hình cài đặt hiện lên</h3>
        <Image src={pic2} style={imageStyle} />
        <h3>
          Chúng ta nhấn <Tag>Next</Tag> để tiếp tục cài đặt
        </h3>
        <Image src={pic3} style={imageStyle} />
        <h3>
          Đến đây chúng ta tích chọn ô <Tag>Đồng ý với các điều khoản</Tag> và
          nhấn <Tag>Next</Tag> để tiếp tục cài đặt
        </h3>
        <Image src={pic4} style={imageStyle} />
        <h3>
          Ở màn hình này, chương trình cài đặt hỏi chúng ta phân vùng lưu{" "}
          <Tag color="magenta">NodeJS</Tag>
        </h3>
        <h3>
          Chúng ta để mặc định và nhấn <Tag>Next</Tag> để tiếp tục cài đặt
        </h3>
        <Image src={pic5} style={imageStyle} />
        <h3>
          Ở màn hình này sẽ liệt kê các tính năng sẽ được cài đặt. Ta nhấn{" "}
          <Tag>Next</Tag> để tiếp tục cài đặt
        </h3>
        <Image src={pic6} style={imageStyle} />
        <h3>
          Ở màn hình này, trình cài đặt hỏi chúng ta có muốn cài tính năng hỗ
          trợ <Tag>Native Module</Tag> hay không?
        </h3>
        <h3>
          Chúng ta vẫn nhấn <Tag>Next</Tag> để tiếp tục cài đặt
        </h3>
        <Image src={pic7} style={imageStyle} />
        <h3>
          Chúng ta vẫn nhấn <Tag>Install</Tag> để chương trình tiến hành cài đặt
        </h3>
        <Image src={pic8} style={imageStyle} />
        <h3>Màn hình chương trình đang tiến hành cài đặt</h3>
        <Image src={pic9} style={imageStyle} />
        <h3>
          Chương trình đã cài đặt xong, chúng ta nhấn <Tag>Finish</Tag> để đóng
          trình cài đặt
        </h3>
        <h1>Kiểm tra NodeJs đã cài đặt trên máy tính hay chưa?</h1>
        <h3>
          Bước 1: Mở command-line prompt (Vào <Tag>Windows</Tag> gõ{" "}
          <Tag>cmd</Tag> và chọn vào <Tag>Command Prompt</Tag>)(Xem hình dưới)
        </h3>
        <Image src={pic10} style={imageStyle} />
        <h3>
          Bước 2: Gõ câu lệnh trong terminal như sau: <Tag>node -v</Tag> và
          enter (Xem ở dưới)
        </h3>
        <Image src={pic11} style={imageStyle} />
        <h3>
          Như hình trên, version của <Tag color="magenta">NodeJs</Tag> là{" "}
          <Tag>v16.14.2</Tag>. Vậy là đã cài đặt{" "}
          <Tag color="magenta">NodeJs</Tag> thành công.
        </h3>
        <h2>Tìm hiểu thêm tại</h2>
        <List>
          <List.Item>
            <Tag color="magenta">
              <LinkOutlined style={{ marginRight: 10 }} />
              <Link href="https://nodejs.org/en/" target="_blank">
                Nodejs
              </Link>
            </Tag>
          </List.Item>
          <List.Item>
            <Tag color="cyan">
              <LinkOutlined style={{ marginRight: 10 }} />
              <Link href="https://www.npmjs.com/" target="_blank">
                NPM
              </Link>
            </Tag>
          </List.Item>
        </List>
        <Divider />
        <Space.Compact direction="vertical" style={{ gap: 10 }}>
          <Text type="danger">
            Lưu ý: Không nhất thiết phải sử dụng{" "}
            <Tag color="magenta">NodeJs</Tag>
            bản <Tag>v16.14.2</Tag>
          </Text>
          <Link>
            Chúng ta nên sử dụng bản <Tag color="green">Stabe</Tag> của thời
            điểm hiện tại.
          </Link>
        </Space.Compact>
      </Col>
    </Row>
  );
};

export default NodeJsSetupPage;
