import React from "react";
import "./sidenav.css";

export function SideNav() {
  return (
    <div className="sidebar">
      <a className="active" href="#dashboard">
        Dashboard
      </a>
      <a href="#tasks">Tasks</a>
    </div>
  );
}
