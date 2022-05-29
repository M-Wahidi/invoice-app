import React from "react";
import LogoImage from "../../Assets/logo.svg";

function Logo({ width, height }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(124, 93, 250)",
        width: "55px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem auto",
        borderRadius: "5px",
      }}
    >
      <img src={LogoImage} alt="logo" style={{ width: "38px" }} />
    </div>
  );
}

export default Logo;
