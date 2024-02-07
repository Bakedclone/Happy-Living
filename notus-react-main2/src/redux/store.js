import { configureStore } from '@reduxjs/toolkit'
import userSlicer from './reducer/userSlicer.js'
import profileSlicer from './reducer/profileSlicer.js';
import propertySlice from './reducer/propertySlicer.js';

export const store = configureStore({
  reducer: {
    user: userSlicer,
    profile: profileSlicer,
    property: propertySlice,
  },
})

export const server = 'http://localhost:4000/api/v1';