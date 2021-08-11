import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp as farThumbsUp,
  faThumbsDown as farThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./Post.css";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

export default function Post({ data }) {
  const [commentsAcitve, setCommentsActive] = useState(false);
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <div className="post">
      <div className="thumbs">
        <FontAwesomeIcon
          classname="i"
          onClick={() => {
            setClick(true);
            setClick2(false);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          icon={click || hover ? faThumbsUp : farThumbsUp}
          style={{ cursor: "pointer", fontSize: "1.2em" }}
        />
        <p>{kFormatter(data.ups)}</p>
        <FontAwesomeIcon
          classname="i"
          onClick={() => {
            setClick(false);
            setClick2(true);
          }}
          onMouseEnter={() => {
            setHover2(true);
          }}
          onMouseLeave={() => {
            setHover2(false);
          }}
          icon={click2 || hover2 ? faThumbsDown : farThumbsDown}
          style={{ cursor: "pointer", fontSize: "1.2em" }}
        />
      </div>
      <div className="content">
        <div>
          <p>{data.subreddit_name_prefixed}</p>
          <h3>{data.title}</h3>
          {data.is_video && (
            <video controls>
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

          <p onClick={() => setCommentsActive(!commentsAcitve)}>
            <i className="far fa-comment"></i>
            {kFormatter(data.num_comments)}
          </p>
        </div>
      </div>
    </div>
  );
}
