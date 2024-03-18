import React from "react";
import { Routes, Route } from "react-router-dom";

import SideNav from "./components/sideNav";
import "./App.css";
import AdminLogIn from "./pages/adminlogin";
import PatientLogIn from "./pages/patientlogin";
import Appointments from "./pages/appointments";
import Patients from "./pages/patients";
import Registration from "./pages/registration";
import Payment from "./pages/payment";
import TestDetails from "./pages/testdetails";
import NoPage from "./pages/nopage";
import AdminLogin from "./pages/adminlogin";

// import api from './api/axiosConfig';

function App() {
  // const [logindata, setdata] = useState();
  return (
    <>
     <div className="login-page-main-continer">
      <Routes>
      <Route index element={<AdminLogin />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
       
      </div>
    <div className="page-layout-main">
     
      <div className="spaceholder">
        <SideNav />
      </div>
      <div className="main-content-continer">
        <Routes>
          <Route path="/patientlogin" element={<PatientLogIn />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/testdetails" element={<TestDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
