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
        addPropertyRequest: (state) => {
            state.loading = true;
        },
        addPropertySuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        addPropertyFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        }
    },
})

export const { getPropertyRequest,
    getPropertySuccess,
    getPropertyFail,
    addPropertyRequest,
    addPropertySuccess,
    addPropertyFail,
    clearError,
    clearMessage } = propertySlice.actions

export default propertySlice.reducer
