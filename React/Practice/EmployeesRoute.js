import React, { useState } from 'react';

function EmployeesRoute() 
{
    const EData = [{empid:1,empname:'Rajesh',address:'H.No.2415'},
    {empid:2,empname:'Rajesh',address:'H.No.5235'},
    {empid:3,empname:'Person',address:'H.No.65131'},
    {empid:4,empname:'Human',address:'H.No.84635'},
    {empid:5,empname:'Man',address:'H.No.35464'},]

    return (
        <>
            <h5>Employees</h5>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {EData.map((item,idx) => {
                        return(
                        <tr key={idx}>
                            <td>{item.empid}</td>
                            <td>{item.empname}</td>
                            <td>{item.address}</td>
                        </tr>);
                    })}
                </tbody>
                
            </table>
        </>
    )
}

export default EmployeesRoute;