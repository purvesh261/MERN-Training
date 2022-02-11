import  React, {Component} from 'react';
import axios from 'axios';

class Employee2 extends Component {
    constructor()
    {
        super();
        this.state = {allDesignations:[], Employees:[], selectId:1};
    }

    componentDidMount()
    {
        axios.get("http://localhost:4000/designation").then(response => {
            this.setState({allDesignations:response.data})
            console.log(response)
        }) 

        axios.get("http://localhost:4000/user").then(response => {
            this.setState({Employees:response.data})
            console.log(response)
        }) 
    }

    onChangeDLL = (e) => {
        let { value } = e.target;
        this.setState({selectId: value})
    }
    render()
    {   
        let { allDesignations, Employees, selectId } = this.state;
        return (
            <>
            <h1 className='text-center'>Fill Designation in DDL</h1>
            <select onChange={this.onChangeDLL}>
                {
                    allDesignations.map((item, idx) => {
                        return(
                            <option key={idx} value={item.id}>{item.designationName}</option>
                        )
                    })
                }
            </select>
            <h1 className='text-center'>Employees</h1>
            <table className='table table-striped'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Status</th>
                <th>Designation ID</th>
            </tr>
            </thead>
            <tbody>
            {
                Employees.map((item,idx) => {
                    return (
                        parseInt(item.designationId) === parseInt(selectId)?
                            <tr key={idx}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.password}</td>
                        <td>{item.status}</td>
                        <td>{item.designationId}</td>
                    </tr>:null
                    );
                }
                )
            }
            </tbody>
            </table>
            </>
        )
    }
}

export default Employee2;