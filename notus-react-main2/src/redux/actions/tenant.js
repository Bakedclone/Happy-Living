import { RemoveTenantFail, RemoveTenantRequest, RemoveTenantSuccess, addTenantFail, addTenantRequest, addTenantSuccess, loadTenantFail, loadTenantRequest, loadTenantSuccess, updateTenantFail, updateTenantRequest, updateTenantSuccess } from "./../reducer/tenantSlicer.js";
import { server } from "./../store.js";
import axios from 'axios'

export const loadTenant = () => async (dispatch) => {
    try {
        dispatch(loadTenantRequest());
        const { data } = await axios.get(`${server}/myinfo`, {
            withCredentials: true,
        });
        console.log(data);
        dispatch(loadTenantSuccess(data.tenant));
    } catch (error) { 
        dispatch(loadTenantFail(error.response.data.message));

    }
}

export const addTenant = (UserID, RoomID, CheckINDate, MonthlyRent, PendingRent) => async (dispatch) => {
    try {
        dispatch(addTenantRequest());
        const { data } = await axios.post(`${server}/admin/addtenant`,{UserID, RoomID, CheckINDate, MonthlyRent, PendingRent}, {
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true,
        });
        console.log(data);
        dispatch(addTenantSuccess(data));
    } catch (error) { 
        dispatch(addTenantFail(error.response.data.message));
    }
}

export const updateTenant = (UserID, RoomID, MonthlyRent, PendingRent, DepositCount, Status, CheckINDate, CheckOUTDate) => async (dispatch) => {
    try {
        dispatch(updateTenantRequest());
        const { data } = await axios.post(`${server}/admin/updatetenant`,{UserID, RoomID, MonthlyRent, PendingRent, DepositCount, Status, CheckINDate, CheckOUTDate}, {
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true,
        });
        console.log(data);
        dispatch(updateTenantSuccess(data));
    } catch (error) { 
        dispatch(updateTenantFail(error.response.data.message));
    }
}

export const removeTenant = (UserID) => async (dispatch) => {
    try {
        dispatch(RemoveTenantRequest());
        const { data } = await axios.post(`${server}/admin/deletetenant`,{UserID}, {
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true,
        });
        console.log(data);
        dispatch(RemoveTenantSuccess(data));
    } catch (error) { 
        dispatch(RemoveTenantFail(error.response.data.message));
    }
}