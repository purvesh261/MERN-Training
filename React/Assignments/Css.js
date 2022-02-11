import React, { useState } from "react";

function Css () {
    var [employees, setEmployeeArray] = useState([]);
    var [newEmployee, setNewEmployee] = useState({code:"", name:"", status:"active", css:"style"});

    const onChangeHandler = (event) => {
        let { name, value } = event.target;

        newEmployee = {...newEmployee, [name]:value};
        setNewEmployee(newEmployee);
        console.log(newEmployee)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        employees.push(newEmployee);
        setEmployeeArray([...employees]);

        newEmployee = {code:"", name:"", status:"active", css:"style"};
        setNewEmployee(newEmployee);

    }

    return (
        <div className="row">
                <div className="col-4">
                    <form className='formGroup mx-2 mt-5' onSubmit={(e) => onSubmitHandler(e)}>
                        <label>Employee Code:</label><br/>
                        <input type="text"
                            name="code"
                            className='p-1 w-75 mb-3'
                            value={newEmployee.code}
                            onChange={onChangeHandler}></input><br/>

                        <label>Name:</label><br/>
                        <input type="text"
                            name="name"
                            className='p-1 w-75 mb-3'
                            value={newEmployee.name}
                            onChange={onChangeHandler}></input><br/>

                        <label>Status:</label><br/>
                        <select name="status" value={newEmployee.status} onChange={onChangeHandler} className="w-75 p-1 mb-3">
                            <option value="active">Active</option>
                            <option value="disabled">Disabled</option>
                        </select><br/>

                        <label>CSS:</label><br/>
                        <select name="css" value={newEmployee.css} onChange={onChangeHandler} className="w-75 p-1 mb-1">
                            <option value="style">Style</option>
                            <option value="class">Class</option>
                        </select><br/>

                        <input type="submit" className='btn btn-primary my-3'></input>
                    </form>
                </div>
                <div className='col-8'>
                <h1>Employees</h1>
                
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                        {employees.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    {(item.css === "style") && (<td style={item.status === "active" ?
                                                                            {backgroundColor: "blue", color:"white"}:
                                                                            {backgroundColor: "orange", color:"white"}}>{item.status}</td>)}

                                    {(item.css === "class") && (<td className={item.status === "active" ? 
                                                                            "bg-success text-white":
                                                                            "bg-danger text-white"}>{item.status}</td>)}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
    )
}

export default Css;