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

    addTenantRequest: (state) => {
      state.loading = true;
    },
    addTenantSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addTenantFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateTenantRequest: (state) => {
      state.loading = true;
    },
    updateTenantSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateTenantFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    RemoveTenantRequest: (state) => {
      state.loading = true;
    },
    RemoveTenantSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    RemoveTenantFail: (state, action) => {
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
  addTenantRequest,
  addTenantSuccess,
  addTenantFail,
  updateTenantRequest,
  updateTenantSuccess,
  updateTenantFail,
  RemoveTenantRequest,
  RemoveTenantSuccess,
  RemoveTenantFail,
  clearError,
  clearMessage } = tenantSlice.actions

export default tenantSlice.reducer
