import React from "react";
import {BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";
import "./Styles/index.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Tracking from "./Components/Tracking";
import UserProfile from "./Components/UserProfile";
import PackageFormComp from "./Components/PackageFormComp";
import EmployeeProfile from "./Components/EmployeeProfile";
import Delivered from "./Components/Delivered";
import Scheduled from "./Components/Scheduled";
import PackageForm from "./Components/PackageForm";
import MyDeliveries from "./Components/MyDeliveries";
import MyDeliveries2 from "./Components/MyDeliveries2";
import UserTracking from "./Components/UserTracking";

export default function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/employeeprofile" element={<EmployeeProfile />} />
        <Route path="/companyform" element={<PackageFormComp />} />
        <Route path="/delivered" element={<Delivered />} />
        <Route path="/scheduled" element={<Scheduled />} />
        <Route path="/userform" element={<PackageForm />} />
        <Route path="/mydeliveries" element={<MyDeliveries />} />
        <Route path="/mydeliveries2" element={<MyDeliveries2 />} />
        <Route path="/usertracking" element={<UserTracking />} />
      </Routes>
      </div>
    </Router>    
  );
}

