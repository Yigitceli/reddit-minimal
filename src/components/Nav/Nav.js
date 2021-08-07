import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

export default function Nav() {
  return (
    <div id="header">
      <div className="logo">
        <i class="fab fa-reddit"></i>
        <p>
          <span style={{ color: "#536DF3" }}>Reddit</span>Minimal
        </p>
      </div>
      <SearchBar/>
    </div>
  );
}
