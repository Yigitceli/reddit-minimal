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
      <div onClick={clickHandler} className="logo">
        <i class="fab fa-reddit"></i>
        <p>
          <span style={{ color: "#536DF3" }}>Reddit</span>Minimal
        </p>
      </div>
      <SearchBar />
    </div>
  );
}
