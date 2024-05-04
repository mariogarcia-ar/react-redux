import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: 1, title: 'First Post!', content: 'Hello!'},
    {id: 2, title: 'Second Post', content: 'More text'},
    {id: 3, title: 'Third Post', content: 'More text'}
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        },
    },
});

export const { postAdded } = postsSlice.actions;
export const selectAllPosts = state => state.posts; // state.posts.filter(post => post.id > 1);
export default postsSlice.reducer;