import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { setData} from "../../store/RedditData";
import GridLoader from "react-spinners/GridLoader";
import "./Posts.css";





export default function Posts() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, url } = useSelector((state) => state.redditData);

  const fetchdata = async () => {
    try {
      setError(false);
      setIsLoading(true);     
      const res = await fetch(`https://www.reddit.com/r/${url}.json`);   
      const json = await res.json();      
      setIsLoading(false);     
      dispatch(setData(json.data.children));
    } catch {
      setError(true);      
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchdata();
  }, [url]);

  return (
    <div className="posts">
      {!isLoading ? (
        error ? (
          <h2>Failed to load subreddit.</h2>
        ) : (
          <ul>
            {data.map((item) => {
              return <Post key={item.data.id} data={item.data} />;
            })}
          </ul>
        )
      ) : (
        <div className="loader">
          <GridLoader loading={isLoading} speedMultiplier="2" />
        </div>
      )}
    </div>
  );
}
