import  React, {Component} from 'react';
import axios from 'axios';

class Employees extends Component {
    constructor()
    {
        super();
        this.state = {Employees:[]};
    }

    componentDidMount()
    {
        axios.get("http://localhost:4000/user").then(response => {
            this.setState({Employees:response.data})
            console.log(response)
        }) 
    }

    render()
    {   
        let { Employees } = this.state;
        return (
            <>
            <h1 className='text-center'>Employees</h1>
            <table className='table table-striped'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {
                Employees.map((item,idx) => {
                    return (
                    <tr key={idx}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.password}</td>
                        <td>{item.status}</td>
                    </tr>);
                }
                )
            }
            </tbody>
            </table>
            
            </>
        )
    }
}

export default Employees;