import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
    return(
        <>
        <h1>Welcome Guest User.</h1>
        <Link to="/"><button className='btn btn-primary'>Logout</button></Link>
        </>
        
    )
}

export default Dashboard;