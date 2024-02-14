import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        // Get Available Rooms
        GetAvailableRoomRequest: (state) => {
            state.loading = true;
        },
        GetAvailableRoomSuccess: (state, action) => {
            state.loading = false;
            state.rooms = action.payload.rooms;
        },
        GetAvailableRoomFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        addRoomRequest: (state) => {
            state.loading = true;
        },
        addRoomSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        addRoomFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        removeRoomRequest: (state) => {
            state.loading = true;
        },
        removeRoomSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        removeRoomFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateRoomRequest: (state) => {
            state.loading = true;
        },
        updateRoomSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        updateRoomFail: (state, action) => {
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

export const {
    GetAvailableRoomRequest,
    GetAvailableRoomSuccess,
    GetAvailableRoomFail,
    addRoomRequest,
    addRoomSuccess,
    addRoomFail,
    removeRoomRequest,
    removeRoomSuccess,
    removeRoomFail,
    updateRoomRequest,
    updateRoomSuccess,
    updateRoomFail,
    clearError,
    clearMessage } = roomSlice.actions

export default roomSlice.reducer