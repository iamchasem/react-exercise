import React from "react";
import "./topnav.css";
import logo from "../../../assets/logo.svg";

export function TopNav() {
  return (
    <header className="topnav">
      <div>
        <img src={logo} alt="Company Logo" className="header-img" />
      </div>
      <div>Profile</div>
    </header>
  );
}
