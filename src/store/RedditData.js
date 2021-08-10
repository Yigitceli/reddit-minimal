import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
    name: 'redditData',
    initialState:{
        data: [],
        isLoading:false
    },
    reducers: {
        toggleLoading: state => {
            state.isLoading = !state.isLoading;
        },
        setData: (state, action) => {
            state.data = action.payload;
        }
        
    }
});

export const {toggleLoading, setData} = DataSlice.actions;
export default DataSlice.reducer; 