import { server } from "./../store.js";
import axios from 'axios';
import { loginRequest, loginFail, loginSuccess } from "./../reducer/userSlicer.js";
// import { useSelector, useDispatch } from 'react-redux'
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        const { data } = await axios.post(`${server}/login`, { email, password }, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        });
        console.log(data);
        dispatch(loginSuccess(data));
    } catch (error) { 
        dispatch(loginFail());

    }
}