import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import '../react.css';

function DashboardAdmin() {
    const [sidebar, setSidebar] = useState();

    useEffect(() => {
        axios.get("http://localhost:4000/sidebar").then((response) => {
            setSidebar(response.data);
        })
    }, [])
    return(
        <>
            <h1>Dashboard</h1>
            <div className='row'>
                <div className='col-md-3'>
                    <ul>
                    {sidebar && sidebar.map((item, idx) => {
                        if(item.admin === true)
                        {
                            return (
                                <li key={idx}>{item.menuName}</li>
                            )
                        }
                        
                    })}
                    <Link to="/"><li>Logout</li></Link>
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default DashboardAdmin;

const Employees = () => { return <h1>This is Employees.</h1>}