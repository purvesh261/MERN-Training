import  React, {Component} from 'react';
import axios from 'axios';
import '../App.css'

class EmployeeUpdate extends Component {
    constructor(){
        super();
        this.state = {employee:{id:"", employeeName:"", address:"", city:""}, Employees: [], showAlert:false};
    }
    
    getEmployees = () => {
        axios.get("http://localhost:4000/employee").then(response => {
            this.setState({Employees:response.data});
            this.setState({employee:this.state.Employees[0]})
        })
    }

    componentDidMount()
    {
        this.getEmployees();
    } 

    onChangeHandler = (event) => {
        let {name, value} = event.target;
        let { employee } = this.state;
        this.setState({employee:{...employee, [name]:value}})
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
    }
    
    onSelectChange = (event) => {
        let { value } = event.target;
        let { employee, Employees } = this.state;
        employee = Employees.find((emp) => {
            return Number(emp.id) === Number(value);
        })
        this.setState({employee})
    }

    render(){
        let { employee, Employees, showAlert }  = this.state;
        return(
            <>
            <div className="center">
            <h1>Update Employee</h1>
            {showAlert && (
                            <div className="alert alert-success alert-dismissible fade show" role="alert">Employee Updated</div>
                    )}
                <div>
                <form onSubmit={this.onSubmit}>
                    <label>Employee</label><br/>
                    <select name="id" value={employee.id} onChange={this.onSelectChange} className="w-75 p-1 m-1 mb-2">
                        {
                            Employees.map((emp, idx) => {
                                return(
                                    <option key={idx} value={emp.id}>{emp.employeeName} (id: {emp.id})</option>
                                )
                            })
                        }

                    </select><br/>
                    
                    <label>Name</label><br/>
                    <input type="text" name="employeeName" className='w-75 p-1 m-1 mb-2' value={employee.employeeName} onChange={this.onChangeHandler}></input><br/>
                    <label>Address</label><br/>
                    <input type="text" name="address" className='w-75 p-1 m-1 mb-2' value={employee.address} onChange={this.onChangeHandler}></input><br/>
                    <label>City</label><br/>
                    <input type="text" name="city" className='w-75 p-1 m-1 mb-2' value={employee.city} onChange={this.onChangeHandler}></input><br/>
                    <input type="submit" className="btn btn-success m-1" value="Update"></input>
                </form>
                </div>
            </div>
            </>
            )
    }
}

export default EmployeeUpdate;