import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import DashboardAdmin from './DashboardAdmin.js'
import Dashboard from './Dashboard.js'


function Routing()
{
    return(
        <>
        <div className='row'>
        <Router>
            <div className='col-md-8'>
                
                    <Routes>
                        <Route path="/" element={<Login />}/>
                        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                
            </div>
            </Router>
        </div>
        </>
    )
}

export default Routing;
