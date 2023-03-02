import { DownloadOutlined, LinkOutlined } from "@ant-design/icons";
import { Col, Divider, Image, List, Row, Tag, Typography } from "antd";
import { CSSProperties } from "react";
const { Text, Link } = Typography;

import pic1 from "../../../../assets/images/vscode/vscode_setup_1.png";
import pic10 from "../../../../assets/images/vscode/vscode_setup_10.png";
import pic11 from "../../../../assets/images/vscode/vscode_setup_11.png";
import pic2 from "../../../../assets/images/vscode/vscode_setup_2.png";
import pic3 from "../../../../assets/images/vscode/vscode_setup_3.png";
import pic4 from "../../../../assets/images/vscode/vscode_setup_4.png";
import pic5 from "../../../../assets/images/vscode/vscode_setup_5.png";
import pic6 from "../../../../assets/images/vscode/vscode_setup_6.png";
import pic7 from "../../../../assets/images/vscode/vscode_setup_7.png";
import pic8 from "../../../../assets/images/vscode/vscode_setup_8.png";
import pic9 from "../../../../assets/images/vscode/vscode_setup_9.png";

const imageStyle: CSSProperties = {
  maxWidth: 900,
};

const VSCodeSetupPage = () => {
  return (
    <Row style={{ paddingBottom: 10 }}>
      <Col>
        <h1>Hướng dẫn cài đặt Visual Studio Code</h1>
        <h3>Đối với từng hệ điều hành, chúng ta sẽ có bản cài đặt riêng</h3>
        <List>
          <List.Item>
            <Tag color="blue">
              <DownloadOutlined style={{ fontSize: 18, marginRight: 10 }} />
              <Link href="https://code.visualstudio.com/sha/download?build=stable&os=win32-user">
                Visual Studio Code - 32bit
              </Link>
            </Tag>
          </List.Item>
          <List.Item>
            <Tag color="blue">
              <DownloadOutlined style={{ fontSize: 18, marginRight: 10 }} />
              <Link href="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user">
                Visual Studio Code - 64bit
              </Link>
            </Tag>
          </List.Item>
        </List>
        <h3>Đầu tiên, chúng ta sẽ mở file cài đặt lên</h3>
        <Image src={pic1} style={imageStyle} />
        <h3>
          Chúng ta nhấn <Tag>OK</Tag>để tiến hành cài đặt (Chạy dưới quyền
          Admin)
        </h3>
        <Image src={pic2} style={imageStyle} />
        <h3>
          Đến đây chúng ta tích chọn ô <Tag>Đồng ý với các điều khoản</Tag> và
          nhấn <Tag>Next</Tag> để tiếp tục cài đặt
        </h3>
        <Image src={pic3} style={imageStyle} />
        <h3>
          Ở màn hình này, chương trình cài đặt hỏi chúng ta phân vùng cài đặt{" "}
          <Tag color="blue">VSCode</Tag>
        </h3>
        <h3>
          Chúng ta để mặc định và nhấn <Tag>Next</Tag> để tiếp tục cài đặt
        </h3>
        <Image src={pic4} style={imageStyle} />
        <h3>
          Ở màn hình này chương trình hỏi chúng ta nơi lưu Shortcut. Chúng ta
          nhấn <Tag>Next</Tag> để tiếp tục
        </h3>
        <Image src={pic5} style={imageStyle} />
        <h3>
          Ở màn hình này, chúng ta tích chọn <Tag>Create a desktop icon</Tag> và
          nhấn <Tag>Next</Tag> để tiếp tục
        </h3>
        <Image src={pic6} style={imageStyle} />
        <h3>
          Chúng ta vẫn nhấn <Tag>Install</Tag> để chương trình tiến hành cài đặt
        </h3>
        <Image src={pic7} style={imageStyle} />
        <h3>Màn hình chương trình đang tiến hành cài đặt</h3>
        <Image src={pic8} style={imageStyle} />
        <h3>
          Ta chọn <Tag>Finish</Tag> để đóng trình cài đặt khi đã cài đặt xong
        </h3>
        <Image src={pic9} style={imageStyle} />
        <h3>Giao diện Visual Studio Code sau khi cài xong</h3>
        <h1>Kiểm tra Visual Studio Code đã cài đặt trên máy tính hay chưa?</h1>
        <h3>
          Bước 1: Mở command-line prompt (Vào <Tag>Windows</Tag> gõ{" "}
          <Tag>cmd</Tag> và chọn vào <Tag>Command Prompt</Tag>)(Xem hình dưới)
        </h3>
        <Image src={pic10} style={imageStyle} />
        <h3>
          Bước 2: Gõ câu lệnh trong terminal như sau: <Tag>code -v</Tag> và
          enter (Xem ở dưới)
        </h3>
        <Image src={pic11} style={imageStyle} />
        <h3>
          Như hình trên, version của <Tag color="blue">Visual Studio Code</Tag>{" "}
          là <Tag>1.75.1</Tag>. Vậy là đã cài đặt{" "}
          <Tag color="blue">Visual Studio Code</Tag> thành công.
        </h3>
        <h2>Tìm hiểu thêm tại</h2>
        <List>
          <List.Item>
            <Tag color="blue">
              <LinkOutlined style={{ marginRight: 10 }} />
              <Link href="https://code.visualstudio.com/docs" target="_blank">
                Visual Studio Code
              </Link>
            </Tag>
          </List.Item>
        </List>
        <Divider />
      </Col>
    </Row>
  );
};

export default VSCodeSetupPage;
