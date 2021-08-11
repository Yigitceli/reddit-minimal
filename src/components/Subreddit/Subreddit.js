import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUrl } from "../../store/RedditData";
import "./Subreddit.css";

export default function Subreddit({ data }) {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setUrl(data.display_name));
  };

  return (
    <div className="subreddit">
      {data.icon_img ? (
        <button onClick={clickHandler} className="sub-button">
          <img src={data.icon_img} alt="icon" />
          <h4>{data.display_name}</h4>
        </button>
      ) : (
        <button onClick={clickHandler} className="sub-button">
          <span className="empty-icon"></span>
          <h4>{data.display_name}</h4>
        </button>
      )}
    </div>
  );
}
