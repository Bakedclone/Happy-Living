import { loadTenantFail, loadTenantRequest, loadTenantSuccess } from "./../reducer/tenantSlicer.js";
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