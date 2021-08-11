import react from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Posts from "./components/Posts/Posts";
import Subreddits from "./components/Subreddits/Subreddits";


function App() {
  
  
  return (
    <div className="App">
      <Nav />
      <div className='reddit-body'>
        <Posts />
        <Subreddits />
      </div>
    </div>
  );
}

export default App;
