import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import ShipCompanyForm from './Components/ShipCompanyForm.jsx'
import EmployeeProfile from './Components/EmployeeProfile'
import UserProfile from './Components/UserProfile'

const container = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
      <ShipCompanyForm />
  </React.StrictMode>,
  container
);


  

