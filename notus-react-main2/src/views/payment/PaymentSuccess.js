import React, { useEffect } from 'react'
import { useLocation  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { UpdatePaymentSuccess } from './../../redux/actions/payment.js';
import { loadUser } from './../../redux/actions/user.js';

function PaymentSuccess() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const referenceNum = queryParams.get('reference');
    // const {isAuthenticated, user, error, message} = useSelector(state=>state.user);
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //   dispatch(loadUser());
    // }, [dispatch]);
    // useEffect(()=>{
    //     dispatch(UpdatePaymentSuccess(referenceNum));
    //   }, [dispatch]);
  return (
    <div className='mt-20 pt-10'>PaymentSuccess
        Reference : ${referenceNum}
    </div>
  )
}

export default PaymentSuccess