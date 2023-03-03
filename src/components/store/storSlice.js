import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const storSlice = createSlice({
    name: 'posts',
    initialState: {
        posts:{},
        dateOnline:{},
    },

    reducers: {
        checkPosts(state,action) {
            state.posts = {
                Title: action.payload.Title,
                imdbID: action.payload.imdbID,
                Poster: action.payload.Poster,}
        },
        checkDateOnline(state,action) {
            state.dateOnline = {
                nameFime: action.payload.nameFime
            }
        }

    }
});

export const {checkPosts,checkDateOnline} = storSlice.actions;

export default storSlice.reducer;
