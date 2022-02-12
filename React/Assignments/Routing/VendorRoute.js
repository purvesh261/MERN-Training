import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Client() 
{
    let [vendorData, setVendorData] = useState();
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:4000/vendors/").then(response => {
            console.log(response);
            setVendorData(response.data);
            setLoading(false)
        });
    },[]);

    return(
        <>
            <h1>Vendors</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    { (loading === false) ? vendorData.map((item,idx) => {
                        return(
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.vendorName}</td>
                            <td>{item.phone}</td>
                            <td>{item.city}</td>
                        </tr>);
                    }) : "Loading..."}
                
                </tbody>
                
            </table>
        </>
        
    )
}

export default Client;