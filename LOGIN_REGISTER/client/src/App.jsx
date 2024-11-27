import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login_Page from './Login_Page';
import Signup_Page from './Signup_Page';
import Home_Page from './Home_Page';
import AddGym_Page from './AddGym_Page';
import Records_Page from './Records_Page';
import Customers_Page from './Customers_Page';
import AddCustomer_Page from './AddCustomer_Page';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/Login_Page" replace />} />
            <Route path="/Login_Page" element={<Login_Page />} />
            <Route path="/Signup_Page" element={<Signup_Page />} />    
            <Route path="/Home_Page" element={<Home_Page />} />
            <Route path="/AddGym_Page" element={<AddGym_Page />} />
            <Route path="/Records_Page" element={<Records_Page />} />
            <Route path="/Customers_Page" element={<Customers_Page/>} />
            <Route path="/AddCustomer_Page" element={<AddCustomer_Page/>} />
        </Routes>
    </Router>
);
}

export default App