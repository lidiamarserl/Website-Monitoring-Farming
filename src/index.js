import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";

import "jquery/dist/jquery.min.js";

import axios from "axios";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Device from "./Pages/Device";
import DatasetList from "./Pages/Dataset/List";
import DatasetData from "./Pages/Dataset/Data";
import DatasetDevice from "./Pages/Dataset/Device";
import ControlList from "./Pages/Control/List";
import ControlSwitch from "./Pages/Control/Switch";
import Anomaly from "./Pages/Dashboard/anomaly";
import Prediksi from "./Pages/Dashboard/prediksi";
import Valve from "./Pages/Dashboard/valve";
import SMC1R1 from "./Pages/Dashboard/SMC1R1";
import SMC1R2 from "./Pages/Dashboard/SMC1R2";
import SMC1R3 from "./Pages/Dashboard/SMC1R3";
import SMC1R4 from "./Pages/Dashboard/SMC1R4";
import SMC1R5 from "./Pages/Dashboard/SMC1R5";
import SMC1R6 from "./Pages/Dashboard/SMC1R6";
import SMC2R1 from "./Pages/Dashboard/SMC2R1";
import SMC2R2 from "./Pages/Dashboard/SMC2R2";
import SMC2R3 from "./Pages/Dashboard/SMC2R3";
import SMC2R4 from "./Pages/Dashboard/SMC2R4";
import SMC2R5 from "./Pages/Dashboard/SMC2R5";
import SMC2R6 from "./Pages/Dashboard/SMC2R6";
import SMC3R1 from "./Pages/Dashboard/SMC3R1";
import SMC3R2 from "./Pages/Dashboard/SMC3R2";
import SMC3R3 from "./Pages/Dashboard/SMC3R3";
import SMC3R4 from "./Pages/Dashboard/SMC3R4";
import SMC3R5 from "./Pages/Dashboard/SMC3R5";
import SMC3R6 from "./Pages/Dashboard/SMC3R6";
import PH1 from "./Pages/Dashboard/PH1";
import PH2 from "./Pages/Dashboard/PH2";
import ST1 from "./Pages/Dashboard/ST1";
import ST2 from "./Pages/Dashboard/ST2";
import Detail from "./Pages/Dashboard/detail";



axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  (err) => Promise.reject(err)
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/device",
    element: <Device />,
  },
  {
    path: "/dataset",
    element: <DatasetList />,
  },
  {
    path: "/dataset/:dataset_id/device",
    element: <DatasetDevice />,
  },
  {
    path: "/dataset/:dataset_id/device/:device_id",
    element: <DatasetData />,
  },
  {
    path: "/control/list",
    element: <ControlList />,
  },
  {
    path: "/control/device/:device_id",
    element: <ControlSwitch />,
  },
  {
    path: "/dashboard/anomaly",
    element: <Anomaly />,
  },
  {
    path: "/dashboard/prediksi",
    element: <Prediksi />,
  },
  {
    path: "/dashboard/logValve",
    element: <Valve />,
  },
  {
    path: "/dashboard/SMC1R1",
    element: <SMC1R1 />,
  },
  {
    path: "/dashboard/SMC1R2",
    element: <SMC1R2 />,
  },
  {
    path: "/dashboard/SMC1R3",
    element: <SMC1R3 />,
  },
  {
    path: "/dashboard/SMC1R4",
    element: <SMC1R4 />,
  },
  {
    path: "/dashboard/SMC1R5",
    element: <SMC1R5 />,
  },
  {
    path: "/dashboard/SMC1R6",
    element: <SMC1R6 />,
  },
  {
    path: "/dashboard/SMC2R1",
    element: <SMC2R1 />,
  },
  {
    path: "/dashboard/SMC2R2",
    element: <SMC2R2 />,
  },
  {
    path: "/dashboard/SMC2R3",
    element: <SMC2R3 />,
  },
  {
    path: "/dashboard/SMC2R4",
    element: <SMC2R4 />,
  },
  {
    path: "/dashboard/SMC2R5",
    element: <SMC2R5 />,
  },
  {
    path: "/dashboard/SMC2R6",
    element: <SMC2R6 />,
  },
  {
    path: "/dashboard/SMC3R1",
    element: <SMC3R1 />,
  },
  {
    path: "/dashboard/SMC3R2",
    element: <SMC3R2 />,
  },
  {
    path: "/dashboard/SMC3R3",
    element: <SMC3R3 />,
  },
  {
    path: "/dashboard/SMC3R4",
    element: <SMC3R4 />,
  },
  {
    path: "/dashboard/SMC3R5",
    element: <SMC3R5 />,
  },
  {
    path: "/dashboard/SMC3R6",
    element: <SMC3R6 />,
  },
  {
    path: "/dashboard/PH1",
    element: <PH1 />,
  },
  {
    path: "/dashboard/PH2",
    element: <PH2 />,
  },
  {
    path: "/dashboard/ST1",
    element: <ST1 />,
  },
  {
    path: "/dashboard/ST2",
    element: <ST2 />,
  },
  {
    path: "/dashboard/:device_id/:index_id",
    element: <Detail />, // Komponen detail grafik
  },
  
]);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    console.log(originalRequest);
    if (error.response.status === 401) {
      router.navigate("/login");
      return Promise.reject(error);
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
