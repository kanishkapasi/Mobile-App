import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  message,
  notification,
} from "antd";
import logosOne from "../../Images/logos (1).png";
import logotwo from "../../Images/logos (2).png";
import stars from "../../Images/Star.png";
import mobileOne from "../../Images/phone (1).png";
import mobiletwo from "../../Images/phone (2).png";
import mobilethree from "../../Images/phone (3).png";
import "./Features.css";
import Footer from "../Footer/Footer";

const { Option } = Select;

export default function Features() {
  const mobiles = [
    {
      id: 1,
      image: `${mobileOne}`,
    },
    {
      id: 1,
      image: `${mobiletwo}`,
    },
    {
      id: 1,
      image: `${mobilethree}`,
    },
  ];
  const openNotification = () => {
    notification.open({
      message: "You Need To Register First",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi
      .open({
        type: "loading",
        content: "Action in progress..",
        duration: 2.5,
      })
      .then(() => message.success("Successfully Registerd", 2.5));
  };

  return (
    <>
      <div className="featureContainer">
        {/* Feature Background Section */}
        <div className="feConatiner">
          <h1
            style={{
              textAlign: "center",
              paddingTop: "80px",
            }}
          >
            FEAT
            <span
              style={{
                color: "white",
              }}
            >
              URES
            </span>
          </h1>
        </div>
        {/* End Of Feature Background Section */}

        {/* Logo Section */}
        <div className="logoContainer">
          <div className="left">
            <img src={logotwo} alt="" className="icn" />
            <img src={logosOne} alt="" className="icn" />
          </div>
          <div className="right">
            <div className="leftCard">
              <h1>4.5/5</h1>
              <img src={stars} alt="" className="str" />
              <p>On The IOS App Store</p>
            </div>
            <div className="rightCard">
              <h1>4.8/5</h1>
              <img src={stars} alt="" className="str" />
              <p>On The Android Play Store</p>
            </div>
          </div>
        </div>
        {/* End Of Logos Section */}

        {/* Mobile Phone Section */}
        <h1
          style={{
            textAlign: "center",
            color: "#8C8C8C",
            marginTop: "60px",
            padding: "10px",
          }}
        >
          Feels great in low-light Mood <br />
          <span>for your eye Protection</span>
        </h1>
        <div className="mobileContainer">
          {mobiles.map((e) => {
            return (
              <div className="card">
                <img src={e.image} alt="" className="phone" />
              </div>
            );
          })}
        </div>
        {/* End Of Mobile Phone Section */}

        {/* Register Section */}
        <div className="regiContainer">
          <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
            REGISTER
          </Button>

          {contextHolder}
          <Button onClick={openNotification}>View All features</Button>
        </div>

        {/* End Of Register Section */}

        {/* Footer */}
        <Footer />
        <FloatButton.BackTop />
      </div>

      {/* Side Bar Section */}
      <Drawer
        title="Create a new account"
        width="100%"
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={success} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: "Please enter url" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                  autoComplete="off"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: "Please select an owner" }]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  { required: true, message: "Please choose the approver" },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            {/* <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  { required: true, message: "Please choose the dateTime" },
                ]}
              >
                <DatePicker.RangePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col> */}
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>

      {/* End Of Side Bar Section */}
    </>
  );
}
