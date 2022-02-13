import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ClientData() 
{
    let [clientData, setClientData] = useState();
    let [loading, setLoading] = useState(true);
    let { clientId } = useParams();

    useEffect(() => {
        axios.get("http://localhost:4000/clients/" + clientId).then(response => {
            console.log(response);
            setClientData(response.data);
            setLoading(false);
        });
    }, []);

    return(
        !loading &&
        <>
            <h1>Client Info</h1>
            <h4>ID: {clientData.id}</h4>
            <h4>Name: {clientData.clientName}</h4>
            <h4>Phone: {clientData.phone}</h4>
            <h4>Area: {clientData.area}</h4>
                
        </>
        
    )
}

export default ClientData;