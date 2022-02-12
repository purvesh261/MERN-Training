import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Client() 
{
    let [clientData, setClientData] = useState();
    let [loading, setLoading] = useState(true);
    let [clientId, setClientID] = useState();

    useEffect(() => {
        axios.get("http://localhost:4000/clients/").then(response => {
            console.log(response);
            setClientData(response.data);
            setLoading(false)
        });
    },[]);

    return(
        
        <>
            <h1>clients</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    { (loading === false) ? clientData.map((item,idx) => {
                            return(
                                <>
                                <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.clientName}</td>
                                    <td><Link to={`/clients/${item.id}/`}><button className='btn btn-primary'>Details</button></Link></td>
                                </tr>
                                </>
                            )
                        
                    }) : "Loading..."}
                
                </tbody>
                
            </table>
        </>
        
    )
}

export default Client;