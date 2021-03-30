import React from "react";
import HeaderImg from "../img/header.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              color: "dodgerblue",
              margin: "30px 0px 0px 0px",
            }}
          >
            DevR - Covid-19 Tracker
          </h1>
          <div className="header_img">
            <img src={HeaderImg} alt="Header Image || Covid-19" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
