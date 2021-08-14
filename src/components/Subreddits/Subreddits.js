import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Subreddit from "../Subreddit/Subreddit";
import { setSubReddits } from "../../store/RedditData";
import "./Subreddits.css";
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: auto auto;
  border-color: red;
`;

export default function Subreddits() {
  const [error, setError] = useState(false);
  const { subReddits } = useSelector((state) => state.redditData);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchSubreddits = async () => {
    try {
      setIsLoading(true);
      const data = await fetch("https://www.reddit.com/subreddits.json");
      const json = await data.json();
      dispatch(setSubReddits(json.data.children));
      setIsLoading(false);
    } catch {
      setError(true);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchSubreddits();
  }, []);

  return (
    <div className="subreddits">
      {!isLoading ? (
        error ? (
          <h2>Failed to load subreddits.</h2>
        ) : (
          <div>
            <h2>Subreddits</h2>
            <ul>
              {subReddits.map((item) => {
                return <Subreddit key={item.data.id} data={item.data} />;
              })}
            </ul>
          </div>
        )
      ) : (
        <div className="loader">
          <GridLoader loading={isLoading} css={override} speedMultiplier="2" />
        </div>
      )}
    </div>
  );
}
