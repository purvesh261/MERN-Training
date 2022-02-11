import  React, {Component} from 'react';
import axios from 'axios';

class EmployeesAPI extends Component {
    constructor()
    {
        super();
        this.state = {departments:[], Employees:[], selectId:0, designations:[], departmentMap:{}, designationMap:{}, loading:true};
    }

    componentDidMount()
    {
        axios.get("http://localhost:4000/department").then(response => {
            this.setState({departments:response.data});
            let { departmentMap } = this.state;
            
            for(let d of this.state.departments){ 
                departmentMap[d.id] = d.departmentName
            }
            console.log(this.state.departmentMap)
        }) 

        axios.get("http://localhost:4000/designation").then(response => {
            this.setState({designations:response.data});
            let { designationMap } = this.state;

            for(let d of this.state.designations){ 
                designationMap[d.id] = d.designationName
            }
            console.log(this.state.designationMap)
            this.setState({loading: false})
        }) 

        axios.get("http://localhost:4000/employee").then(response => {
            this.setState({Employees:response.data});
            
        }) 

    }
    // onUpdateHandler = (event) => {
    //     let { }
    // }
    onDeleteHandler = (id) => {
        const URL = "http://localhost:4000/employee/" + id;
        axios.delete(URL).then((response) => {
            console.log(response)
        })
    }
    onChangeDLL = (e) => {
        let { value } = e.target;
        this.setState({selectId: parseInt(value)});
    }
    render()
    {   
        let { departments, Employees, selectId, departmentMap, designationMap, loading } = this.state;
        return (
            <>
            <h1 className='text-center'>Employees</h1>
            
            <select onChange={this.onChangeDLL}>
                <option key="0" value="0">All Departments</option>
                {
                    departments.map((item, idx) => {
                        return(
                            <option key={idx} value={item.id}>{item.departmentName}</option>
                        )
                    })
                }
            </select>
            <table className='table table-striped m-3'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                (loading? <p>Loading</p>:
                Employees.map((item,idx) => {
                    return (
                        ((parseInt(item.departmentId) === parseInt(selectId)) || (selectId === 0)) &&
                        <tr key={idx}>
                        <td>{item.id}</td>
                        <td>{item.employeeName}</td>
                        <td>{item.salary}</td>
                        <td>{departmentMap[item.departmentId]}</td>
                        <td>{designationMap[item.designationId]}</td>
                        <td><button className='btn btn-primary' onClick={() => this.onUpdateHandler(item)}>Update</button></td>
                        <td><button className='btn btn-danger' onClick={() => this.onDeleteHandler(item.id)}>Delete</button></td>
                        </tr>
                    );
                }
                )
                )
            }
            </tbody>
            </table>
            </>
        )
    }
}

export default EmployeesAPI;