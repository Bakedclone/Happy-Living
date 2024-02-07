import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { clearError, clearMessage } from "./../redux/reducer/userSlicer";
import { loadUser } from "./../redux/actions/user";
import { getAllProperty } from "./../redux/actions/property.js";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardAppleWatch from "components/Cards/CardAppleWatch";

function Selectproerty() {
  const { isAuthenticated, user, error, message } = useSelector(state => state.user);
  const { property } = useSelector(state => state.property);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAllProperty())
  }, [dispatch]);

  const [selectedArea, setSelectedArea] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  console.log(selectedArea);

  return (<>
    <IndexNavbar fixed isAuthenticated={isAuthenticated} user={user} />
    <div className="container mt-20 mx-auto items-center flex flex-wrap">
      <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg mt-15 py-16 px-12 relative z-10 ">
        <div className="w-full text-center lg:w-8/12">
          <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><h6 className="text-xl mb-1 font-semibold">
            Select City :
          </h6></label>
          <select id="countries" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(event)=>setSelectedCity(event.target.value)}
          >
            <option selected >Choose a City</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
          <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><h6 className="text-xl mt-10 mb-1 font-semibold">
            Select Area :
          </h6></label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(event)=>setSelectedArea(event.target.value)}>
            <option selected>Choose a Area</option>
            <option value="S.G Highway">S.G. Highway</option>
          </select>
          {/* <h3 className="font-semibold text-3xl">
            Do you love out PG?
          </h3> */}
          <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
            "Ready to experience the warmth and comfort of Our PG? Book now and secure your spot in our vibrant community! Whether you're a student seeking a peaceful study environment or a professional in need of a cozy retreat after a long day's work, Our PG offers the perfect blend of comfort, convenience, and camaraderie."

          </p>
          <div className="sm:block flex flex-col mt-10">
            <a
              href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
              target="_blank"
              className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
            >
              {/* <i className="fab fa-github text-lg mr-1"></i> */}
              <span>Book Now</span>
              <i className="fas fa-solid fa-arrow-right ml-3"></i>
            </a>
          </div>
          <div className="text-center mt-16"></div>
        </div>
        <Grid container spacing={6}>
          {property && property.map((prop) => (
            (selectedArea == "Choose a Area" || prop.area === selectedArea) ? (
            <Grid item xs={12} sm={6} md={4}>
              <CardAppleWatch prop={prop}/>
            </Grid>) : (<></>) 
          ))}
        </Grid>
      </div>
    </div>

    <Footer />
  </>
  )
}

export default Selectproerty