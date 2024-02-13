import React,{ useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import { useDispatch, useSelector } from "react-redux";
import toast, {Toaster} from "react-hot-toast";

import { clearError, clearMessage } from "./../redux/reducer/userSlicer.js";
import { loadUser } from "./../redux/actions/user.js";

// Views
import Home from "views/Home.js";
import Selectproerty from "views/Selectproerty.js";
import BookNow from "views/BookNow.js";
import Profile from "views/Profile.js";
import Updateprofile from "views/Updateprofile.js";
import RentPay from "views/RentPay.js";
import PaymentSuccess from "views/payment/PaymentSuccess.js";

function Index() {

  const {isAuthenticated, user, error, message} = useSelector(state=>state.user);

  const dispatch = useDispatch();
  useEffect(()=> {
    if(error) {
      toast.error(error);
      dispatch(clearError());
    }
    if(message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  },[dispatch, error, message]);


  useEffect(()=>{
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
        <IndexNavbar fixed isAuthenticated={isAuthenticated} user={user}/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/selectproperty" exact component={Selectproerty} />
            <Route path="/selectproperty/booknow" exact component={BookNow} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/updateprofile" exact component={Updateprofile} />
            <Route path="/payrent" exact component={RentPay} />
            <Route path="/paymentsuccess" exact component={PaymentSuccess} />
            {/* <Redirect from="/auth" to="/auth/login" /> */}
          </Switch>
        <Footer />
        <Toaster/>
    </>
  )
}

export default Index