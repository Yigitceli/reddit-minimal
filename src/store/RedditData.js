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
        },
        addComments: (state, action) => {
            const postToAdd = state.data.find(item => {return item.data.id === action.payload.id});
            const newData = state.data.filter(item => {return item.data.id !== action.payload.id});
            state.data = [...newData, {...postToAdd, comments:[action.payload.comments]}];

        }
        
        
    }
});

export const {toggleLoading, setData, setUrl, setSubReddits, addComments} = DataSlice.actions;
export default DataSlice.reducer; 