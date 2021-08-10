import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading, setData } from "../../store/RedditData";
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";
import "./Posts.css";

const override = css`
  display: block;
  margin: auto auto;
  border-color: red;
`;

export default function Posts() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.redditData);

  const fetchdata = async () => {
    dispatch(toggleLoading())
    const res = await fetch("https://www.reddit.com/r/popular.json");
    const json = await res.json();
    dispatch(toggleLoading())
    dispatch(setData(json.data.children));
  };
  useEffect(() => {
    fetchdata();
    console.log(data);
  }, []);

  return (
    <div className="posts">
      {!isLoading ? (
        <ul>
          {data.map(item => {return <Post key={item.data.id} data={item.data}/>})}
        </ul>
      ) : (
        <div className="loader">
          <GridLoader loading={isLoading} css={override} speedMultiplier="2" />
        </div>
      )}
    </div>
  );
}
