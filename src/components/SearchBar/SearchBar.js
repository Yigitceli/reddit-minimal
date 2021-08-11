import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "../../store/RedditData";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e) => {
    
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchValue === ''){
      dispatch(setUrl('popular'));
      setSearchValue('');          
    }else {
      dispatch(setUrl(searchValue));
      setSearchValue(''); 
    }
    
  };
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        onChange={handleChange}
        value={searchValue}
        type="text"
        placeholder="Subreddit Search"
      ></input>
      <button  className="search" type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}
