import React from "react";
import "../styles/navigation.scss";
import Logo from "../styles/default/logo.jpg";
export const Navigation = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="https://github.com/HermitRhaps">
          <img src={Logo} alt="Project title" className="logo_image" />
        </a>
      </div>
    </div>
  );
};
