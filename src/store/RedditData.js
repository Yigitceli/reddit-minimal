import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRedditData = createAsyncThunk(
  "fetchRedditData",
  async (arg, { dispatch, getState }) => {
    try {
      const state = getState();
      const url = state.redditData.url;
      const response = await fetch(`https://www.reddit.com/r/${url}.json`);
      const data = await response.json();
      dispatch(setData(data.data.children));
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const fetchSubredditData = createAsyncThunk(
  "fetchSubredditData",
  async (arg, { dispatch, getState }) => {
    try {
      const data = await fetch("https://www.reddit.com/subreddits.json");
      const json = await data.json();      
      dispatch(setSubReddits(json.data.children));      
      return json;
    } catch (err) {
        throw new Error(err);
    }
  }
);

export const DataSlice = createSlice({
  name: "redditData",
  initialState: {
    data: [],
    subReddits: [],
    url: "popular",
    loadingSection: {
      isLoadingForPosts: false,
      isLoadingForSubreddits: false,
    },
    errorSection: {
      isErrorForPosts: false,
      isErrorForSubreddits: false,
    },
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setSubReddits: (state, action) => {
      state.subReddits = action.payload;
    },
  },
  extraReducers: {
    [fetchRedditData.pending]: (state, action) => {
      state.loadingSection.isLoadingForPosts = true;
      state.errorSection.isErrorForPosts = false;
    },
    [fetchRedditData.fulfilled]: (state, action) => {
      state.loadingSection.isLoadingForPosts = false;
      state.errorSection.isErrorForPosts = false;
    },
    [fetchRedditData.rejected]: (state, action) => {
      state.loadingSection.isLoadingForPosts = false;
      state.errorSection.isErrorForPosts = true;
    },
    [fetchSubredditData.pending]: state => {
        state.loadingSection.isLoadingForSubreddits = true;
      state.errorSection.isErrorForSubreddits = false;
    },
    [fetchSubredditData.fulfilled]: state => {
        state.loadingSection.isLoadingForSubreddits = false;
      state.errorSection.isErrorForSubreddits = false;
    },
    [fetchSubredditData.rejected]: state => {
        state.loadingSection.isLoadingForSubreddits = false;
      state.errorSection.isErrorForSubreddits = true;
    }
  },
});

export const { setData, setUrl, setSubReddits } = DataSlice.actions;
export default DataSlice.reducer;
