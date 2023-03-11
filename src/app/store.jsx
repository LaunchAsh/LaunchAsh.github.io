import { configureStore } from '@reduxjs/toolkit';
import testSlice from './testSlice';
const store = configureStore({
    reducer: { 
        todos: testSlice 
    },
})
export default store;