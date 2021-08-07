import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Search"></input>
      <i class="fas fa-search"></i>
    </form>
  );
}
