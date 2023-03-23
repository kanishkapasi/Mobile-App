import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/navLogo.png";
import "./Footer.css";
import { message, Space } from "antd";

export default function Footer() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Yor subscription was successfully !!",
    });
  };
  return (
    <div className="footerContainer">
      {/* Secarch section */}
      <div className="searchContainer">
        <h2>
          Take control of your personal <br />
          <span
            style={{
              color: "white",
              fontSize: "30px",
            }}
          >
            finances today
          </span>
        </h2>
        <div className="inp">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input"
          />
          {contextHolder}
          <Space className="btn">
            <button onClick={success}>SUBSCRIBE</button>
          </Space>
        </div>
      </div>
      {/* End Of Search Section */}
      <div className="fContainer">
        <div className="firstSection">
          <img src={logo} alt="" />
          <p
            style={{
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sitonsecteturadipisicing elit
            <br /> sed do eiusmod temporincididunt Laoreet non <br />
            sagittis aliquam bibendum.
          </p>
        </div>
        <div className="secondSection">
          <h4
            style={{
              fontSize: "20px",
            }}
          >
            MENU
          </h4>
          <Link to={"/"} className="links">
            <p>Home</p>
          </Link>
          <Link to={"/Features"} className="links">
            <p>Features</p>
          </Link>
          <Link to={"/Pricing"} className="links">
            <p>pricing</p>
          </Link>
          <Link to={"/blog"} className="links">
            <p>Blog</p>
          </Link>
        </div>
        <div className="thirdSection">
          <h4
            style={{
              fontSize: "20px",
            }}
          >
            UTILIT PAGES
          </h4>
          <p>Styloe Guide</p>
          <p>Password P className="links"rotected</p>
          <p>404 notFound</p>
          <p>Licenses</p>
          <p>Chnage Log</p>
        </div>
        <div className="fourthSection">
          <h4
            style={{
              fontSize: "20px",
            }}
          >
            ADDRESS
          </h4>
          <p>
            1700 W Blancke St, kiyev <br />
            port south USA, America
          </p>
          <p>
            +3255 456 789 <br />
            mail@primpay.com
          </p>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          padding: "10px",
        }}
      >
        Copyright © Primarily | Developed by Kanishka Pasindu{" "}
      </p>
    </div>
  );
}
