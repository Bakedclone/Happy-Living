import { dashboardCardFail, dashboardCardRequest, dashboardCardSuccess, dashboardStatsFail, dashboardStatsRequest, dashboardStatsSuccess } from "./../reducer/dashboardSlicer.js";
import { server } from "./../store.js";
import axios from 'axios'

export const dashboardCardDataLoader = () => async (dispatch) => {
    try {
        dispatch(dashboardCardRequest());
        const { data } = await axios.get(`${server}/dashdata`,{
            withCredentials: true,
        });
        console.log(data);
        dispatch(dashboardCardSuccess(data));
    } catch (error) {
        dispatch(dashboardCardFail(error.response.data.message));
    }
}

export const dashboardStatsLoader = () => async (dispatch) => {
    try {
        dispatch(dashboardStatsRequest());
        const { data } = await axios.get(`${server}/dashstats`,{
            withCredentials: true,
        });
        console.log(data);
        dispatch(dashboardStatsSuccess(data));
    } catch (error) {
        dispatch(dashboardStatsFail(error.response.data.message));
    }
}