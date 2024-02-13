import React, { useEffect, useState } from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import HeaderStats from "components/Headers/HeaderStats";
import { useDispatch, useSelector } from "react-redux";
import { dashboardStatsLoader } from "./../../redux/actions/dashboard.js"
export default function Dashboard() {
  const { lineChart, barChart, error, message} = useSelector(state=>state.dashboard);
  const [chartReload, setChartReload] = useState(false);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(dashboardStatsLoader());
  }, [dispatch]);
  useEffect(() => {
    setChartReload(prevState => !prevState);
  }, [lineChart]);
  // console.log("libechart",lineChart);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart values={lineChart ? lineChart : [0,0,0,0,0,0]} reload={chartReload}/>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart values={barChart ? barChart : [0,0,0,0,0,0]} reload={chartReload}/>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
