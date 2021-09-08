import React, { useEffect } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchRedditData} from "../../store/RedditData";
import GridLoader from "react-spinners/GridLoader";
import "./Posts.css";





export default function Posts() {
  const dispatch = useDispatch();
  const { data, url, loadingSection, errorSection} = useSelector((state) => state.redditData);  
  
  
  useEffect(() => {
    dispatch(fetchRedditData());
  }, [url]);

  return (
    <div className="posts">
      {!loadingSection.isLoadingForPosts ? (
         errorSection.isErrorForPosts ? (
          <h2>Subreddit is not exist.</h2>
        ) : (
          <ul>
            {data.map((item) => {
              return <Post key={item.data.id} data={item.data} />;
            })}
          </ul>
        )
      ) : (
        <div className="loader">
          <GridLoader loading={loadingSection.isLoadingForPosts} speedMultiplier="2" />
        </div>
      )}
    </div>
  );
}
