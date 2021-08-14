import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
    name: 'redditData',
    initialState:{
        data: [],        
        subReddits: [],
        url:'popular'
        
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
        
        
        
        
    }
});

export const {setData, setUrl, setSubReddits} = DataSlice.actions;
export default DataSlice.reducer; 