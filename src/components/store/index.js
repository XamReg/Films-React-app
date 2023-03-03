import {configureStore} from '@reduxjs/toolkit';
import storSlice from './storSlice';
import posts  from './storSlice';
import dateOnline from './storSlice';
export default configureStore({
    reducer: {
        posts: storSlice,
        dateOnline:dateOnline,
    }
});