import React from "react";
import "./Pricing.css";
import { FloatButton } from "antd";
// import ScrollTriger from "react-scroll-trigger";
// import CountUp from "react-countup";
import { message, Space } from "antd";
import Footer from "../Footer/Footer";
// Images
import priceOne from "../../Images/basci.png";
import priceTwo from "../../Images/Starndard.png";
import priceThree from "../../Images/premium.png";

export default function Pricing() {
  const [messageApi, contextHolder] = message.useMessage();

  // const [counter, setCounter] = useState(false);
  const cards = [
    {
      id: 1,
      img: `${priceOne}`,
      price: "$10.00",
    },
    {
      id: 2,
      img: `${priceTwo}`,
      price: "$19.00",
    },
    {
      id: 3,
      img: `${priceThree}`,
      price: "$35.00",
    },
  ];
  const success = () => {
    messageApi.open({
      type: "error",
      content: "Please Add Payment Method !!",
    });
  };
  return (
    <div className="priceContainer">
      {/* Pricing BG Section */}
      <div className="pricingContainer">
        <h1>
          PRIC
          <span
            style={{
              color: "white",
            }}
          >
            ING
          </span>
        </h1>
      </div>
      {/* End Of Pricing BG Section */}

      {/* Payment Services Section */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "25px",
          marginTop: "60px",
          color: "#B5B5B5",
          padding: "10px",
        }}
      >
        Our payment services worldwide
      </h1>
      <div className="paymentServicesContainer">
        {cards.map((e) => {
          return (
            <div className="card">
              <div className="image">
                {" "}
                <img src={e.img} alt="" className="package" />
              </div>

              <div className="month">
                {/* <ScrollTriger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                > */}
                <h3>
                  {/* ${counter && <CountUp start={0} end={10} delay={0} />}.00 */}
                  {e.price}
                </h3>
                {/* </ScrollTriger> */}
                <p>MONTH</p>
              </div>
              <div className="items">
                <p>Modern Designing</p>
                <p>Modern Design</p>
                <p>Easy to Customize</p>
                <p>Quickly Set Up A Website</p>
                <p>Another Feature</p>
                <p>24/7 Customer Support</p>
              </div>
              {contextHolder}
              <div className="btn">
                <Space className="click">
                  <button onClick={success}>GET STARTED</button>
                </Space>
              </div>
            </div>
          );
        })}
      </div>
      {/* End Of Payment Services Section */}

      {/* Footer */}
      <Footer />

      {/* Scroll up button */}
      <FloatButton.BackTop />
    </div>
  );
}
