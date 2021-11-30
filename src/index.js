import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import CreateUser from './Components/UserProfile.jsx';

const container = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    
    <CreateUser />
  </React.StrictMode>,
  container
);


  

