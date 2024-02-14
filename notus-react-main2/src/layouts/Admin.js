import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import AddTenants from "views/admin/AddTenants";
import AvailableRooms from "views/admin/AvailableRooms";
import ViewUser from "views/admin/ViewUser";
import AddProperty from "views/admin/AddProperty";
import AddRooms from "views/admin/AddRooms";
import UpdateRoom from "views/admin/UpdateRoom";
import UpdateTenants from "views/admin/UpdateTenants";
import RemoveTenant from "views/admin/RemoveTenant";
import RemoveRoom from "views/admin/RemoveRoom";
import ViewTenants from "views/admin/ViewTenants";

import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { clearError, clearMessage } from "./../redux/reducer/tenantSlicer.js";

export default function Admin() {
  const { error, message } = useSelector(state=>state.tenant);
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
  },[error, message]);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/addtenants" exact component={AddTenants} />
            <Route path="/admin/updatetenants" exact component={UpdateTenants} />
            <Route path="/admin/viewtenants" exact component={ViewTenants} />
            <Route path="/admin/removetenants" exact component={RemoveTenant} />
            <Route path="/admin/getavailablerooms" exact component={AvailableRooms} />
            <Route path="/admin/viewuser" exact component={ViewUser} />
            <Route path="/admin/addproperty" exact component={AddProperty} />
            <Route path="/admin/addrooms" exact component={AddRooms} />
            <Route path="/admin/removeroom" exact component={RemoveRoom} />
            <Route path="/admin/updaterooms" exact component={UpdateRoom} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
      <Toaster/>
    </>
  );
}
