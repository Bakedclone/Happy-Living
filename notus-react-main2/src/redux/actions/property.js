import { getPropertyFail, getPropertyRequest, getPropertySuccess } from "./../reducer/propertySlicer.js";
import { server } from "./../store.js";
import axios from 'axios'

export const getAllProperty = () => async (dispatch) => {
    try {
        dispatch(getPropertyRequest());
        const { data } = await axios.get(`${server}/getallproperty`);
        console.log(data);
        dispatch(getPropertySuccess(data.property));
    } catch (error) {
        dispatch(getPropertyFail(error.response.data.message));
    }
}