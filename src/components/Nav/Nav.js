import React from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { setUrl } from "../../store/RedditData";

import "./Nav.css";



export default function Nav() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setUrl('popular'));
  };
  return (
    <div id="header">
      <div className="logo">
        <i onClick={clickHandler} class="fab fa-reddit"></i>
        <p onClick={clickHandler}>
          <span style={{ color: "#536DF3" }}>Reddit</span>Mini
        </p>
      </div>
      <SearchBar />
    </div>
  );
}
