import React, { useState } from "react";
import { Button, Popover, Rate } from "antd";
import "antd/dist/reset.css";
import CountUp from "react-countup";
import "./Home.css";
import ScrollTriger from "react-scroll-trigger";
import { FloatButton } from "antd";
import Footer from "../Footer/Footer";
// Images
import mobile from "../../Images/bgPhone.png";
import v from "../../Images/V1.png";
import iconOne from "../../Images/Icon.png";
import iconTwo from "../../Images/Icon (1).png";
import iconThree from "../../Images/Icon (2).png";
import payment from "../../Images/payment.png";
import play from "../../Images/play.png";
import proOne from "../../Images/profile (3).png";
import proTwo from "../../Images/profile (2).png";
import proThree from "../../Images/profile (1).png";
import credit from "../../Images/credit.png";
import right from "../../Images/right.png";

export default function Home() {
  const [counter, setCounter] = useState(false);
  const [value, setValue] = useState(3);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const rates = [
    {
      image: `${proOne}`,
      name: "Natasha",
      position: "Designer",
      description:
        "“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust  looking.”Primchat was the modern what we were looking.",
    },
    {
      image: `${proTwo}`,
      name: "Joe Cook",
      position: "Developer",
      description:
        "“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust  looking.”Primchat was the modern what we were looking.",
    },
    {
      image: `${proThree}`,
      name: "jesica Jobs",
      position: "Product Designer",
      description:
        "“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust  looking.”Primchat was the modern what we were looking.",
    },
  ];
  const icons = [
    {
      id: 1,
      img: `${iconOne}`,
      title: "Create an Account",
      des: "Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business",
    },
    {
      id: 2,
      img: `${iconTwo}`,
      title: "Attached Bank Account",
      des: "Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business",
    },
    {
      id: 3,
      img: `${iconThree}`,
      title: "Send Money",
      des: "Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business",
    },
  ];
  const content = (
    <div>
      <p
        style={{
          color: "blue",
          textAlign: "center",
        }}
      >
        Started your way
      </p>
    </div>
  );

  return (
    <div className="homeContainer">
      {/* First Section */}
      <div className="hContainer">
        <h1>
          Ready To Launch Your
          <br />
          Online
          <span
            style={{
              color: "white",
            }}
          >
            {" "}
            Payment
          </span>{" "}
          App
        </h1>
        <p
          style={{
            paddingTop: "30px",
          }}
        >
          A simple yet modern solution to showcase your app
        </p>
        <Popover content={content} title="Start">
          <Button
            type="primary"
            className="btn"
            style={{
              marginTop: "30px",
            }}
          >
            GET STARTED
          </Button>
        </Popover>
      </div>
      {/* End OF First Section */}
      {/* Mobile Section */}
      <div className="mobileContainer">
        <div className="left">
          <img src={mobile} alt="" className="mbl" />
        </div>
        <div className="right">
          <img src={v} alt="" className="v" />
          <p
            style={{
              paddingTop: "15px",
            }}
          >
            The Template has been released
          </p>
        </div>
      </div>
      {/* end OF Mobile Section */}

      {/* Third Section */}
      <div className="cardContainer">
        {icons.map((e) => (
          <div className="card">
            <img src={e.img} alt="" />
            <h4
              style={{
                marginTop: "25px",
                fontWeight: "500",
              }}
            >
              {e.title}
            </h4>
            <p
              style={{
                marginTop: "25px",
                fontSize: "15px",
              }}
            >
              {e.des}
            </p>
          </div>
        ))}
      </div>
      {/* End Of Third Section */}

      {/* Payment Section */}
      <div className="paymentContainer">
        <div className="left">
          <h2
            style={{
              fontSize: "30px",
            }}
          >
            <span
              style={{
                color: "#B5B5B5",
              }}
            >
              Send and receive
              <br />
            </span>{" "}
            payments{" "}
            <span
              style={{
                color: "#B5B5B5",
              }}
            >
              easily
            </span>
          </h2>
          <p
            style={{
              marginTop: "50px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            <br /> sed do eiusmod tempor incididunt
          </p>
          <p
            style={{
              marginTop: "40px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore
            <br /> magna aliqua.
          </p>
          <div
            className="play"
            style={{
              marginTop: "40px",
            }}
          >
            <img src={play} alt="" className="playBtn" />
            <div className="details">
              <p>lorem ipsum dolarSite</p>
              <p>Amet,consectruer</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={payment} alt="" className="pay" />
        </div>
      </div>
      {/* End Of Payment Section */}

      {/* Users Count Section */}
      <div className="countContainer">
        <ScrollTriger
          onEnter={() => setCounter(true)}
          onExit={() => setCounter(false)}
        >
          <div className="uContainer">
            <div className="cards">
              <h5>{counter && <CountUp start={0} end={12000} delay={0} />}+</h5>
              <p
                style={{
                  color: "",
                  fontWeight: "600",
                }}
              >
                Downloads
              </p>
            </div>
            <div className="cards">
              <h5>
                $
                {counter && (
                  <CountUp start={0} end={10} delay={0} duration={2} />
                )}
                M+
              </h5>
              <p
                style={{
                  fontWeight: "600",
                }}
              >
                Transaction
              </p>
            </div>
            <div className="cards">
              <h5>
                {counter && (
                  <CountUp start={0} end={1000} delay={0} duration={2} />
                )}
                +
              </h5>
              <p
                style={{
                  fontWeight: "600",
                }}
              >
                Feedsback
              </p>
            </div>
          </div>
        </ScrollTriger>
      </div>
      {/* end Of users Count Section */}
      {/* Rate Section */}
      <div
        className="rateContainer"
        style={{
          marginTop: "100px",
        }}
      >
        <div className="rContainer">
          {rates.map((e) => (
            <div className="cards">
              <div className="top">
                <div className="tCards">
                  <div className="left">
                    <img src={e.image} alt="" />
                  </div>
                  <div className="right">
                    <div className="right">
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {e.name}
                      </p>
                      <p>{e.position}</p>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <span>
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? (
                      <span className="ant-rate-text">{desc[value - 1]}</span>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>
              <p
                style={{
                  marginTop: "30px",
                }}
              >
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* End OF Rate Section */}

      {/* Credit Card Section */}
      <div className="creditContainer">
        <div className="credit">
          <div className="left">
            <h2>
              Credit is the Fastest
              <br /> Mobile Banking
              <br /> Solution.
            </h2>
            <p
              style={{
                color: "white",
              }}
            >
              Feels great in low-light Mood for your eye Protection Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt
            </p>
            <div className="correct">
              <div className="tiks">
                <img src={right} alt="" />
                <p>All your Transaction</p>
              </div>
              <div className="tiks">
                <img src={right} alt="" />
                <p>All your Transaction</p>
              </div>
              <div className="tiks">
                <img src={right} alt="" />
                <p>All your Transaction</p>
              </div>
              <div className="tiks">
                <img src={right} alt="" />
                <p>All your Transaction</p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={credit} alt="" className="creditIcon" />
          </div>
        </div>
      </div>
      {/* End Of Credit Card Section */}

      {/* Footer */}
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
}
