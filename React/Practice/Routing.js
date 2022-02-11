import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeesRoute from './EmployeesRoute.js';
import EmployeeDetails from './EmployeeDetails.js';

function Routing()
{
    return(
        <>
        <h3>Routing</h3>
        
        <div className='row'>
        <Router>
            <div className='col-md-2'>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/employees">Employees</Link></li>
                    <li><Link to="/employee/2/Rajesh">Rajesh</Link></li>
                    <li><Link to="/fawegewaag">Invalid Page</Link></li>
                </ul>
            </div>
            <div className='col-md-8 bg-secondary'>
                
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/employees" element={<EmployeesRoute/>}/>
                        <Route path="/employee/:eid/:ename" element={<EmployeeDetails />}/>
                        <Route path="/*" element={<InvalidPage />}/>
                    </Routes>
                
            </div>
            </Router>
        </div>
        </>
    )
}

export default Routing;
const Home = () => { return <h1>This is the Dashboard.</h1>}
const About = () => { return <h1>This is the About component.</h1>}
const InvalidPage = () => { return <h1>Invalid URL. Please contact your admin.</h1>}