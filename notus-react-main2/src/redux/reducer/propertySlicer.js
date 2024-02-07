import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const propertySlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

        // get property
        getPropertyRequest: (state) => {
            state.loading = true;
        },
        getPropertySuccess: (state, action) => {
            state.loading = false;
            state.property = action.payload;
        },
        getPropertyFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export const { getPropertyRequest,
    getPropertySuccess,
    getPropertyFail } = propertySlice.actions

export default propertySlice.reducer
