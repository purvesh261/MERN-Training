import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetails() 
{
    let { eid, ename } = useParams();
    return(
        <h1>Welcome {ename}, id:{eid}</h1>
    )
}

export default EmployeeDetails;