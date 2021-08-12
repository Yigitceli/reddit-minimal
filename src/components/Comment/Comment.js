import React, { useEffect } from "react";
import "./Comment.css";

const converter = (t) => {
  var myDate = new Date(t * 1000);
  var now = new Date();
  const milliseconds = Math.abs(now - myDate);
  const hours = Math.ceil(milliseconds / 36e5);
  return hours;
};

export default function Comment({ data }) {
  return (
    <div className="comment">
      <p className="hr">{`${converter(data.created_utc)} hours ago`}</p>
      <h4>{data.author}</h4>
      <p>{data.body}</p>
    </div>
  );
}
