import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name:'todos',
    initialState: [],
    reducers: {
    addPost(state, action) {
        console.log(action.payload);
        state.push(action.payload);
    },
    removePost(state, action) {
        state.splice(action.payload, 1)
    }
    }
});
const { actions, reducer } = testSlice;
export const { addPost, removePost } = actions;
export default reducer;