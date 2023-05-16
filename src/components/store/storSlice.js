import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const storSlice = createSlice({
    name: 'posts',
    initialState: {
        posts:{},
        dateOnline:{},
        ticketBuy: {},
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
        },
        tiketBuyPlace(state,action) {
            state.ticketBuy = {
                Title: action.payload.Title,
                imdbID: action.payload.imdbID,
                dateFilm: action.payload.dateFilm,
                placeM: action.payload.placeM,
            }
        }

    }
});

export const {checkPosts,checkDateOnline,tiketBuyPlace} = storSlice.actions;

export default storSlice.reducer;
