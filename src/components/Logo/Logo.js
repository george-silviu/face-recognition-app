import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import logo from "./smiley.png";

const Logo = () => {
  return (
    <div className="ma4 mt4">
      <Tilt className="Tilt br2 shadow-2 " scale="1.1">
        <div className="pa3">
          <img alt="logo" src={logo} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
