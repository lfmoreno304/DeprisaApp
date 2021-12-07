import React from "react";
import {BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";
import "./Styles/index.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Tracking from "./Components/Tracking";
import DashAdmin from "./Components/DashAdmin";
import UserProfile from "./Components/UserProfile";
import PackageFormComp from "./Components/PackageFormComp";
import EmployeeProfile from "./Components/EmployeeProfile";
import Delivered from "./Components/Delivered";
import Scheduled from "./Components/Scheduled";
import PackageForm from "./Components/PackageForm";
import MyDeliveries from "./Components/MyDeliveries";
import MyDeliveries2 from "./Components/MyDeliveries2";
import UserTracking from "./Components/UserTracking";
import UserManagement from "./Components/UserManagement";
import EmployeeManagement from "./Components/EmployeeManagement";
import Register from "./Components/Register";

export default function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
        <Route path="/usermanagement" element={<UserManagement/>}/>
        <Route path="/employeemanagement" element={<EmployeeManagement/>}/>
        <Route path="/dashboard" element={<DashAdmin />} />
      </Routes>
      </div>
    </Router>    
  );
}

