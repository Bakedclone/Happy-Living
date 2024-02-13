import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const tenantSlice = createSlice({
  name: 'tenant',
  initialState,
  reducers: {
    // Load Tenant
    loadTenantRequest: (state) => {
      state.loading = true;
    },
    loadTenantSuccess: (state, action) => {
      state.loading = false;
      state.tenant = action.payload;
    },
    loadTenantFail: (state, action) => {
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
    loadTenantRequest,
    loadTenantSuccess,
    loadTenantFail,
    clearError,
    clearMessage } = tenantSlice.actions

export default tenantSlice.reducer
