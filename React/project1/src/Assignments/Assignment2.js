import React, { Component } from 'react';
import FormStatus from './FormStatus';
import '../App.css'

// CRUD operations
class Employees extends Component{
    constructor(){
        super();
        this.state = {filled:false, showAlert:false, showDelete:false, deleteIndex:-1, id:"", name:"", salary: "", employees:[]};
    }

    calculateGrade = (salary) =>
    {
        if(salary < 50000){
            return "D";
        }
        else if(salary >= 50000 && salary < 100000){
            return "C";
        }
        else if(salary >= 100000 && salary < 200000){
            return "B";
        }
        else{
            return "A";
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        let id = event.target.id.value;
        let name = event.target.name.value;
        let salary = event.target.salary.value;
        
        let { employees } = this.state;

        if(id && name && salary)
        {
            let grade = this.calculateGrade(salary);
            let updated = false;
            for (let obj of employees){
                if(obj.empID === id)
                {
                    obj.name = name;
                    obj.salary = salary;
                    obj.grade = grade;
                    updated = true
                    break;
                }
            }
            if(!updated){
                employees.push({empID:id, name: name, salary: salary, grade: grade})
            }
            
            this.setState({filled:true, showAlert:true, employees: employees, id:"", name:"", salary:""});

        }
        else{
            this.setState({filled:false, showAlert:true});
        }
    }

    onChangeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value});
    }

    updateEmp = (idx) => {
        let employee = this.state.employees[idx];
        let { id, name, salary } = this.state;
        id = employee.empID;
        name = employee.name;
        salary = employee.salary;
        this.setState({id, name, salary});
    }

    deleteEmp = (idx) => {
        this.setState({showDelete:true, deleteIndex:idx})
    }

    onDeleteYes = () => {
        let { employees, deleteIndex } = this.state;
        employees.splice(deleteIndex, 1);
        this.setState({ employees:employees, showDelete:false, deleteIndex:-1 })
    }

    onDeleteNo = () => {
        this.setState({showDelete:false})
    }

    render()
    {
        let {filled, showAlert, employees , id, name, salary, showDelete, deleteIndex} = this.state
        return(
            <div className="row">
                <div className="col-4">
                    <h1>Create Employee</h1>
                    <form className='formGroup mx-2 my-5' onSubmit={this.onFormSubmit}>
                        {showAlert? <FormStatus filled={filled} passwordLength={true}/>: null}
                        <label>Employee ID:</label><br/>
                        <input type="text"
                            name="id"
                            className='p-1 w-75 mb-3'
                            value={id}
                            onChange={this.onChangeHandler}></input><br/>

                        <label>Name:</label><br/>
                        <input type="text"
                            name="name"
                            className='p-1 w-75 mb-3'
                            value={name}
                            onChange={this.onChangeHandler}></input><br/>

                        <label>Salary:</label><br/>
                        <input type="text"
                            name="salary"
                            className='p-1 w-75 mb-3'
                            value={salary}
                            onChange={this.onChangeHandler}></input><br/>

                        <input  type="submit" className='btn btn-primary my-3'></input>
                    </form>
                </div>
                <div className='col-8'>
                <h1>Employees</h1>
                {showDelete?
                    <div className="alert alert-danger m-3" role="alert">
                        <h5 class="alert-heading">Delete Item</h5>
                        Are you sure you want to delete this entry?<br/>
                        <button className='btn btn-danger my-3 mx-1 px-4' onClick={() => this.onDeleteYes(deleteIndex)}>Yes</button>
                        <button className='btn btn-secondary my-3 mx-1 px-4' onClick={() => this.onDeleteNo()}>No</button>
                    </div>
                    :null}
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Grade</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        {employees.map((item, idx) => {
                            return (
                                <tr key={idx} className={item.grade + "-grade"}>
                                    <td>{item.empID}</td>
                                    <td>{item.name}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.grade}</td>
                                    <td><button className='btn btn-primary' onClick={() => this.updateEmp(idx)}>Update</button></td>
                                    <td><button className='btn btn-primary' onClick={() => this.deleteEmp(idx)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default Employees;
