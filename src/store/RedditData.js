import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
    name: 'redditData',
    initialState:{
        data: [],
        isLoading:false,
        subReddits: [],
        url:'popular'
    },
    reducers: {
        toggleLoading: state => {
            state.isLoading = !state.isLoading;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        },
        setSubReddits: (state, action) => {
            state.subReddits = action.payload;
        }
        
    }
});

export const {toggleLoading, setData, setUrl, setSubReddits} = DataSlice.actions;
export default DataSlice.reducer; 