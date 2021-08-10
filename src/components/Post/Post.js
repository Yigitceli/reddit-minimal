import React, { useState } from "react";
import "./Post.css";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

export default function Post({ data }) {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <div className="post">
      <div className="thumbs">
        <i
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={!hover ? "far fa-thumbs-up" : "fas fa-thumbs-up"}
        ></i>

        <p>{kFormatter(data.ups)}</p>
        <i
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}          
          className={!hover2 ? "far fa-thumbs-down" : "fas fa-thumbs-down"}
        ></i>
      </div>
      <div className="content">
        <div>
          <p>{data.subreddit_name_prefixed}</p>
          <h3>{data.title}</h3>
          {data.is_video && (
            <video controls>
              {" "}
              <source
                src={data.media.reddit_video.fallback_url}
                type="video/mp4"
              />
            </video>
          )}
          {data.is_reddit_media_domain && !data.is_video && (
            <img src={data.url_overridden_by_dest} alt={data.title} />
          )}
        </div>
        <div className="footer">
          <p>{data.author_fullname}</p>

          <p>
            <i className="far fa-comment"></i>
            {kFormatter(data.num_comments)}
          </p>
        </div>
      </div>
    </div>
  );
}
