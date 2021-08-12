import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setComments } from "../../store/RedditData";
import Comment from "../Comment/Comment";
import "./Comments.css";
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  border-color: red;
`;

export default function Comments({ data }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchComments = async () => {
    setIsLoading(true);
    const res = await fetch(`https://www.reddit.com${data.permalink}.json?limit=25`);
    const json = await res.json();
    console.log(json);
    setComments(json[1].data.children.slice(0,-1))
    setIsLoading(false);
    
  };
  useEffect(() => {
      fetchComments();
  }, []);

  return (
    <div className="comments">
      {isLoading ? (
        <div className="loader-comments">
          <GridLoader loading={isLoading} css={override} speedMultiplier="2" />
        </div>
      ) : (
        <ul>{comments.map(item => {return <Comment data={item.data}/>})}</ul>
      )}
    </div>
  );
}
