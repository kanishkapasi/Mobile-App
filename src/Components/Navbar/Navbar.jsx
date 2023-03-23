import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/navLogo.png";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handle = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    const screenChange = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", screenChange);

    return () => {
      window.removeEventListener("resize", screenChange);
    };
  }, []);
  return (
    <div className="navbarContainer">
      <div className="nContainer">
        <div className="navHome">
          <img src={logo} alt="" />
        </div>
        <ul
          className={
            !clicked || screenWidth > 750 ? "navLinks" : "navLinks active-links"
          }
        >
          <Link to={"/"} className="list" onClick={handle}>
            <li>Home</li>
          </Link>
          <Link to={"/Features"} className="list" onClick={handle}>
            <li>Features</li>
          </Link>
          <Link to={"/Pricing"} className="list" onClick={handle}>
            <li>Pricing</li>
          </Link>
          <Link to={"/Blog"} className="list" onClick={handle}>
            <li>Blogs</li>
          </Link>
        </ul>
        <div className="bars" onClick={handle}>
          {clicked ? <GrClose /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}
