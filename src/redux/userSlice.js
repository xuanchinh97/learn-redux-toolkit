import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Xuan Chinh',
        age: '22',
        about: 'I\'m a Frontend Developer',
        avatarUrl: 'https://avatars.githubusercontent.com/u/87141231',
        theme: '#128F00'
    },
    reducers: {
        updateUser: (state, action) => {
            state.name = action.payload.name
            state.age = action.payload.age
            state.about = action.payload.about
            state.avatarUrl = action.payload.avatarUrl
            state.theme = action.payload.theme
        },
    }
})

export const { updateUser } = userSlice.actions
export default userSlice.reducer