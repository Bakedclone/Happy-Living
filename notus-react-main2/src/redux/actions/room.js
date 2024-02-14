import { GetAvailableRoomFail, GetAvailableRoomRequest, GetAvailableRoomSuccess, addRoomFail, addRoomRequest, addRoomSuccess, removeRoomFail, removeRoomRequest, removeRoomSuccess } from "./../reducer/roomSlicer.js";
import { server } from "./../store.js";
import axios from 'axios'

export const GetAvailableRoom = (Propertyid) => async (dispatch) => {
    try {
        dispatch(GetAvailableRoomRequest());
        const { data } = await axios.post(`${server}/availablerooms`, {Propertyid} ,{
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true, 
        });
        console.log(data);
        dispatch(GetAvailableRoomSuccess(data));
    } catch (error) { 
        dispatch(GetAvailableRoomFail(error.response.data.message));
    }
}

export const AddRoom = (_id, Propertyid, MonthlyRent, SharingCapacity, facilities, Occupied) => async (dispatch) => {
    try {
        dispatch(addRoomRequest());
        const { data } = await axios.post(`${server}/addrooms`, {_id, Propertyid, MonthlyRent, SharingCapacity, facilities, Occupied} ,{
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true, 
        });
        console.log(data);
        dispatch(addRoomSuccess(data));
    } catch (error) { 
        dispatch(addRoomFail(error.response.data.message));
    }
}

export const RemoveRoom = (_id ) => async (dispatch) => {
    try {
        dispatch(removeRoomRequest());
        const { data } = await axios.delete(`${server}/addrooms`, { _id } ,{
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true, 
        });
        console.log(data);
        dispatch(removeRoomSuccess(data));
    } catch (error) { 
        dispatch(removeRoomFail(error.response.data.message));
    }
}

export const updateRoom = (_id, Propertyid, MonthlyRent, SharingCapacity, facilities, Occupied) => async (dispatch) => {
    try {
        dispatch(addRoomRequest());
        const { data } = await axios.put(`${server}/updateroom`, {_id, Propertyid, MonthlyRent, SharingCapacity, facilities, Occupied} ,{
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true, 
        });
        console.log(data);
        dispatch(addRoomSuccess(data));
    } catch (error) { 
        dispatch(addRoomFail(error.response.data.message));
    }
}