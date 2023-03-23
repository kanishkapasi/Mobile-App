import React from "react";
import "./Blog.css";
import { FloatButton } from "antd";
import Footer from "../Footer/Footer";
// Images
import newsOne from "../../Images/news (1).png";
import newsTwo from "../../Images/news (2).png";
import newsThree from "../../Images/news (3).png";
import newsFour from "../../Images/news (4).png";
import postOne from "../../Images/posts (1).png";
import postTwo from "../../Images/posts (2).png";
import postthree from "../../Images/posts (3).png";
import article from "../../Images/article.png";

export default function Blog() {
  const news = [
    {
      id: 1,
      img: `${newsOne}`,
      subHead: "Marketing",
      head: `The Best Productivity Apps for 2021 -Updated List`,
      owner: "May 02, 2022       Nattasha",
    },
    {
      id: 2,
      img: `${newsTwo}`,
      subHead: "Designing",
      head: "Turn Emails & Attachments Into To-Doswith Apps",
      owner: "May 02, 2022       Nattasha",
    },
    {
      id: 3,
      img: `${newsThree}`,
      subHead: "Business",
      head: "Why virtual experiences are going tobe the next big thing in 2023",
      owner: "May 02, 2022       Nattasha",
    },
    {
      id: 4,
      img: `${newsFour}`,
      subHead: "Development",
      head: "Is it smart to invest in crypto in 2022? What you need to know",
      owner: "May 02, 2022       Nattasha",
    },
  ];

  const articles = [
    {
      img: `${postOne}`,
      subHead: "Business",
      head: "App X is now available on your wrist: Download watchOS...",
      owner: "May 02, 2022       Peter",
    },
    {
      img: `${postTwo}`,
      subHead: "Marketing",
      head: "Apps Integrations to Boost Your Productivity",
      owner: "May 02, 2022       Peter",
    },
    {
      img: `${postthree}`,
      subHead: "Creative",
      head: "Turn Emails & Attachments Into To-Dos with Apps",
      owner: "May 02, 2022       Peter",
    },
  ];
  return (
    <div className="blogContainer">
      {/* Heading Section */}
      <div className="bContainer">
        <div className="head">
          <h1>
            BLOG
            <span
              style={{
                color: "white",
              }}
            >
              S
            </span>
          </h1>
        </div>
      </div>
      {/* End Of Heading Section */}

      {/* Articles And Posts Section */}
      <h1
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        News Articles
      </h1>
      <div className="postContainer">
        <div className="leftPosts">
          <img src={article} alt="" className="art" />
          <h6>Business</h6>
          <h3>
            Great productivity apps you can download
            <br /> for free this week on iPhone
          </h3>
          <p>May 02, 2022 Nattasha</p>
        </div>
        <div className="rightPost">
          {articles.map((e) => {
            return (
              <div className="cards">
                <div className="left">
                  <img src={e.img} alt="" className="post" />
                </div>
                <div className="right">
                  <h5>{e.subHead}</h5>
                  <h3>{e.head}</h3>
                  <p>{e.owner}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Of Articles And Posts Section */}

      {/* News Section */}
      <h1
        style={{
          marginTop: "70px",
          textAlign: "center",
        }}
      >
        Latest News
      </h1>
      <div className="newsContainer">
        {news.map((e) => {
          return (
            <div className="cards">
              <img src={e.img} alt="" className="newsImage" />
              <h5>{e.subHead}</h5>
              <h3>{e.head}</h3>
              <p>{e.owner}</p>
            </div>
          );
        })}
      </div>
      {/* End Of News Section */}

      {/* Footer */}
      <Footer />
      {/* End Of Footer */}

      {/* Scroll up button */}
      <FloatButton.BackTop />
    </div>
  );
}
