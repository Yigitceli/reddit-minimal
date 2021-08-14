import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Subreddit from "../Subreddit/Subreddit";
import { fetchSubredditData } from "../../store/RedditData";
import "./Subreddits.css";
import GridLoader from "react-spinners/GridLoader";

export default function Subreddits() {
  const { subReddits, loadingSection, errorSection } = useSelector(
    (state) => state.redditData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubredditData());
  }, []);

  return (
    <div className="subreddits">
      {!loadingSection.isLoadingForSubreddits ? (
        errorSection.isErrorForSubreddits ? (
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
          <GridLoader
            loading={loadingSection.isLoadingForSubreddits}
            speedMultiplier="2"
          />
        </div>
      )}
    </div>
  );
}
