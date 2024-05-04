import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit'


const initialState = [
    {id: 1, name: 'dude lebowski'},
    {id: 2, name: 'neil armstrong'},
    {id: 3, name: 'dave bowman'},
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name) {
                return {
                    payload: {
                        id: nanoid(),
                        name
                    }
                }
            },         
        },
    },
});

export const { userAdded } = usersSlice.actions;
export const selectAllUsers = state => state.users; // state.users.filter(post => post.id > 1);
export default usersSlice.reducer;