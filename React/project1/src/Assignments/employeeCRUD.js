import  React, {Component} from 'react';
import axios from 'axios';

class EmployeesCRUD extends Component {
    constructor()
    {
        super();
        this.state = {employee:{id:"", employeeName:"", address:"", city:""}, Employees: [], showDelete:false, deleteID: -1, showAlert:false};
    }

    getEmployees = () => {
        axios.get("http://localhost:4000/employee").then(response => {
            this.setState({Employees:response.data});
        })
    }
    componentDidMount()
    {
        this.getEmployees();
    } 

    onChangeHandler = (event) => {
        let { name, value } = event.target;
        let { employee } = this.state;
        this.setState({employee: {...employee, [name]:value}});
    }

    onSubmit = (event) => {
        event.preventDefault();
        let { employee } = this.state;
        const URL = `http://localhost:4000/employee/${employee.id}`;
        axios.put(URL, employee).then((response) => {
            console.log(response);
            if(response.statusText ==="OK")
            {
                this.setState({showAlert:true})
                setTimeout(() => {
                    this.setState({showAlert:false})
                },2500)
                this.getEmployees();
            }
        });
        employee = {id:"", employeeName:"", address:"", city:""};
        this.setState({ employee });
    }

    onUpdateHandler = (item) => {
        let { employee } = this.state;
        employee.id = item.id;
        employee.employeeName = item.employeeName;
        employee.address = item.address;
        employee.city = item.city;
        this.setState({ employee })
    }

    onDelete = (empID) => {
        this.setState({showDelete:true, deleteID:empID})
    }

    onDeleteYes = () => {
        let { deleteID } = this.state
        const URL = "http://localhost:4000/employee/" + deleteID;
        axios.delete(URL).then((response) => {
            console.log(response)
            this.setState({showDelete:false, deleteID:-1})
            this.getEmployees();
        })
    }

    onDeleteNo = () => {
        this.setState({showDelete:false, deleteID:-1})
    }

    render() {
        let { employee, Employees, showAlert, showDelete } = this.state;
        return (
            <>
            <div className='row mb-5 mt-5 Crud'>
                <div className='col-4'>
                    <h1>Update Employee</h1>
                    {showAlert && (
                            <div className="alert alert-success alert-dismissible fade show" role="alert">Employee Updated</div>
                    )}

                    <form onSubmit={this.onSubmit}>
                        <label>Employee ID</label><br/>
                        <input type="text" name="id" className='w-75 p-1 mb-2' value={employee.id} onChange={this.onChangeHandler} disabled></input><br/>
                        <label>Name</label><br/>
                        <input type="text" name="employeeName" className='w-75 p-1 m-1 mb-2' value={employee.employeeName} onChange={this.onChangeHandler}></input><br/>
                        <label>Address</label><br/>
                        <input type="text" name="address" className='w-75 p-1 m-1 mb-2' value={employee.address} onChange={this.onChangeHandler}></input><br/>
                        <label>City</label><br/>
                        <input type="text" name="city" className='w-75 p-1 m-1 mb-2' value={employee.city} onChange={this.onChangeHandler}></input><br/>
                        
                        <input type="submit" className="btn btn-success m-1" value="Update"></input>
                    </form>
                </div>
                <div className='col-8'>
                {showDelete?
                    <div className="alert alert-danger m-3" role="alert">
                        <h5 class="alert-heading">Delete Employee</h5>
                        Are you sure you want to delete this employee?<br/>
                        <button className='btn btn-danger my-3 mx-1 px-4' onClick={() => this.onDeleteYes()}>Yes</button>
                        <button className='btn btn-secondary my-3 mx-1 px-4' onClick={() => this.onDeleteNo()}>No</button>
                    </div>
                    :null}
                <table className='table table-striped m-3'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Employees.map((item,idx) => {
                            return (
                                
                                <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.employeeName}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td><button className='btn btn-primary' onClick={() => this.onUpdateHandler(item)}>Update</button></td>
                                <td><button className='btn btn-danger' onClick={() => this.onDelete(item.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                        )
                    }
                        
                    </tbody>
                </table>
                </div>
                
            </div>
            
            </>
        );
    }
}

export default EmployeesCRUD;