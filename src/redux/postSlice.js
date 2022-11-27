import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [
            {
                title: 'Lean redux-toolkit',
                content: 'code code code and bug'
            }
        ]
    },
    reducers: {
        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        }
    }
})

export const { addPost } = postSlice.actions
export default postSlice.reducer
