import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Client from './ClientRoute.js';
import Client2 from './Client2.js';
import ClientData from './ClientDataRoute.js';
import Vendor from './VendorRoute.js';
import './react.css';

function Routing()
{
    return(
        <>
        <h3>Routing</h3>
        
        <div className='row'>
        <Router>
            <div className='col-md-2'>
                <ul>
                    <Link to="/"><li>Dashboard</li></Link>
                    <Link to="/clients"><li>Clients</li></Link>
                    <Link to="/vendors"><li>Vendors</li></Link>
                </ul>
            </div>
            <div className='col-md-8'>
                
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/clients" element={<Client2/>}/>
                        <Route path="/clients/:clientId/" element={<ClientData/>}/>
                        <Route path="/vendors" element={<Vendor/>}/>
                    </Routes>
                
            </div>
            </Router>
        </div>
        </>
    )
}

export default Routing;
const Dashboard = () => { return <h1>This is the Dashboard.</h1>}