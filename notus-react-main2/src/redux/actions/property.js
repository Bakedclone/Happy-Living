import { addPropertyFail, addPropertyRequest, addPropertySuccess, getPropertyFail, getPropertyRequest, getPropertySuccess } from "./../reducer/propertySlicer.js";
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

export const addProperty = (formdata) => async (dispatch) => {
    try {
        dispatch(addPropertyRequest());
        const { data } = await axios.post(`${server}/addproperty`, formdata, {
            headers: {
                "Content-type": "multipart/form-data",
            },
            withCredentials: true,
        });
        console.log(data);
        dispatch(addPropertySuccess(data));
    } catch (error) {
        dispatch(addPropertyFail(error.response.data.message));
    }
}