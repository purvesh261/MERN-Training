import React, { useState } from 'react';

function Display3() {
    const [empId, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    console.log(empId)
    const onSubmit = () => {
        console.log(empId, empName)
    }
    return (
        <>
            <h1>Employee</h1>
            <div className='form-group'>
            <label>Employee Id</label>
            <input type="text" className="form-control" placeholder="ID" onChange={(e) => setEmpId(e.target.value)}></input>
            </div>
            <div className='form-group'>
            <label>Employee Name</label>
            <input type="text" className="form-control" placeholder="Name" onChange={(e) => setEmpName(e.target.value)}></input>
            </div>
            <div className='form-group'>
                <button className='btn btn-success' onClick={onSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Display3;