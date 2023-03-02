import { LinkOutlined } from "@ant-design/icons";
import { Col, Divider, Image, List, Row, Tag, Typography } from "antd";
import { CSSProperties } from "react";
const { Text, Link } = Typography;

import pic1 from "../../assets/images/demo/code-1.png";
import pic10 from "../../assets/images/demo/code-10.png";
import pic11 from "../../assets/images/demo/code-11.png";
import pic2 from "../../assets/images/demo/code-2.png";
import pic3 from "../../assets/images/demo/code-3.png";
import pic4 from "../../assets/images/demo/code-4.png";
import pic5 from "../../assets/images/demo/code-5.png";
import pic6 from "../../assets/images/demo/code-6.png";
import pic7 from "../../assets/images/demo/code-7.png";
import pic8 from "../../assets/images/demo/code-8.png";
import pic9 from "../../assets/images/demo/code-9.png";

const imageStyle: CSSProperties = {
  maxWidth: 900,
};

const StartingPage = () => {
  return (
    <Row style={{ paddingBottom: 30 }}>
      <Col>
        <h1>Hướng dẫn khởi chạy project ReactJs</h1>

        <h3>Đầu tiên, chúng ta giải nén folder chưa source code</h3>
        <Image src={pic1} style={imageStyle} />
        <h3>
          Chuột phải vào Folder chọn <Tag color="geekblue">Extract Here</Tag>
        </h3>
        <Image src={pic2} style={imageStyle} />
        <h3>Folder sau khi được giải nén (Ảnh trên)</h3>
        <Image src={pic3} style={imageStyle} />
        <h3>
          Chúng ta mở ứng dụng <Tag color="blue">Visual Studio Code</Tag>
        </h3>
        <h3>
          Trong ứng dụng <Tag color="blue">Visual Studio Code</Tag> chọn{" "}
          <Tag color="geekblue">File</Tag> {`->`} chọn{" "}
          <Tag color="geekblue">Open Folder</Tag>
        </h3>
        <Image src={pic4} style={imageStyle} />
        <h3>Chúng ta tìm đến Folder vừa được giải nén trước đó</h3>
        <Image src={pic5} style={imageStyle} />
        <h3>Màn hình sau khi mở Folder xong (Ở dưới)</h3>
        <Image src={pic6} style={imageStyle} />
        <h3>
          Tiếp theo, chúng ta chọn <Tag color="geekblue">Terminal</Tag>
          rồi chọn
          <Tag color="geekblue">New Terminal</Tag>
        </h3>
        <Image src={pic7} style={imageStyle} />
        <h3>Màn hình terminal được khởi chạy (Ở dưới)</h3>
        <Image src={pic8} style={imageStyle} />
        <h3>
          Gõ câu lệnh <Tag color="geekblue">npm i</Tag> và enter để chạy
        </h3>
        <h3>
          Công dụng: Cài đặt các package từ node_modules của{" "}
          <Tag color="magenta">NodeJs</Tag> để chương trình có thể chạy được
        </h3>
        <Image src={pic9} style={imageStyle} />
        <h3>
          Sau khi cài đặt xong các package, ta chạy câu lệnh{" "}
          <Tag color="geekblue">npm start</Tag> để bắt đầu chạy chương trình
        </h3>
        <Image src={pic10} style={imageStyle} />
        <h3>
          Màn hình sau khi chương trình được khởi chạy (Mặc định sẽ chạy trên{" "}
          <Tag>localhost:3000</Tag>)
        </h3>
        <Image src={pic11} style={imageStyle} />

        <h2>Tìm hiểu thêm tại</h2>
        <List>
          <List.Item>
            <Tag color="blue">
              <LinkOutlined style={{ marginRight: 10 }} />
              <Link href="https://reactjs.org/" target="_blank">
                ReactJs
              </Link>
            </Tag>
          </List.Item>
          <List.Item>
            <Tag color="purple">
              <LinkOutlined style={{ marginRight: 10 }} />
              <Link href="https://rsuitejs.com/" target="_blank">
                Rsuite
              </Link>
            </Tag>
          </List.Item>
        </List>
        <Divider />
        <Text type="danger">
          Lưu ý: Khi đã cài các package thành công thì những lần sau ta không
          phải chạy lại câu lệnh <Tag color="geekblue">npm i</Tag> nữa mà chỉ
          cần chạy câu lệnh <Tag color="geekblue">npm start</Tag> để khởi chạy
          luôn.
        </Text>
      </Col>
    </Row>
  );
};

export default StartingPage;
