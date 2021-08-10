import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./RedditData";

export default configureStore({
  reducer: {
    redditData: DataSlice,
  },
});
