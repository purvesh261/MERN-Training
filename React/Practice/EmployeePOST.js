import  React, {Component} from 'react';
import axios from 'axios';
import EmployeesAPI from '../Assignments/EmployeesAPI';

class EmployeesPOST extends Component {
    constructor()
    {
        super();
        this.state = {employee:{id:"", employeeName:"", salary:"", departmentId:"", designationId:""}};
    }

    onChangeHandler = (event) => {
        let { name, value } = event.target;
        if(name in ["id", "salary","departmentId", "designationId"])
        {
            value = Number(value);
        }
        let { employee } = this.state;
        this.setState({employee: {...employee, [name]:value}});
    }

    onSubmit = (event) => {
        event.preventDefault();
        let { employee } = this.state;
        const URL = "http://localhost:4000/employee/";
        axios.post(URL, employee).then((response) => {
            console.log(response);
        });
        employee = {id:"", employeeName:"", salary:"", departmentId:"", designationId:""};
        this.setState({ employee });
    }

    render() {
        let { employee } = this.state;
        return (
            <>
            
            <div className='row'>
                <div className='col-4'>
                    <h1>Add Employee</h1>
                    <form onSubmit={this.onSubmit}>
                        <label>Employee ID</label><br/>
                        <input type="text" name="id" className='w-75 p-1 m-1 mb-2' value={employee.id} onChange={this.onChangeHandler}></input><br/>
                        <label>Name</label><br/>
                        <input type="text" name="employeeName" className='w-75 p-1 m-1 mb-2' value={employee.employeeName} onChange={this.onChangeHandler}></input><br/>
                        <label>Salary</label><br/>
                        <input type="text" name="salary" className='w-75 p-1 m-1 mb-2' value={employee.salary} onChange={this.onChangeHandler}></input><br/>
                        <label>Department ID</label><br/>
                        <input type="text" name="departmentId" className='w-75 p-1 m-1 mb-2' value={employee.departmentId} onChange={this.onChangeHandler}></input><br/>
                        <label>Designation ID</label><br/>
                        <input type="text" name="designationId" className='w-75  5 p-1 m-1 mb-2' value={employee.designationId} onChange={this.onChangeHandler}></input><br/>
                        <input type="submit" className="btn btn-success m-1" value="Submit"></input>
                    </form>
                </div>
                <div className='col-8'>
                    <EmployeesAPI />
                </div>
                
            </div>
            
            </>
        );
    }
}

export default EmployeesPOST;