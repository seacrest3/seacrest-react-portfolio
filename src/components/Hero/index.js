import React from "react";
import "./style.css";

function Hero(props) {
  return (
    // <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    <div className="hero text-center">
    {props.children}
    </div>
  );
}

export default Hero;
