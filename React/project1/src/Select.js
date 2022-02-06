import React, { Component } from 'react';

class Select extends Component {
    constructor()
    {
        super();
        this.state = {employees:[{id:"101", name:"Employee One", salary:"60000", department:"Web Development"},
        {id:"102", name:"Employee Two", salary:"75000", department:"Web Development"},
        {id:"103", name:"Employee Three", salary:"55000", department:"Mobile App Development"},
        {id:"104", name:"Employee Four", salary:"67000", department:"Software Development"},
        {id:"105", name:"Employee Five", salary:"40000", department:"Mobile App Development"},
        {id:"106", name:"Employee Six", salary:"45000", department:"Software Development"},
        {id:"107", name:"Employee Seven", salary:"45000", department:"HR"},
        {id:"108", name:"Employee Eight", salary:"50000", department:"HR"},
        {id:"109", name:"Employee Nine", salary:"40000", department:"Admin"},
        {id:"110", name:"Employee Ten", salary:"45000", department:"Web Development"}],
        options:[], tempEmployees:[]};

        this.state.options = this.state.employees.map((item) => {
            return item.department;
        })
        this.state.options = this.state.options.filter((item, idx) => {
            return this.state.options.indexOf(item) == idx;
        })

        this.state.tempEmployees = this.state.employees;
    };

    onSelectDept = (event) => {
        let { value, options, selectedIndex } = event.target;
        console.log(value, selectedIndex);
        let { tempEmployees, employees } = this.state;

        if(value === "Department")
        {
            tempEmployees = employees;
            
        }
        else{
            tempEmployees = employees.filter((item) => {
                return item.department === value;
            })
        }
        
        this.setState({ tempEmployees });
    }

    render(){
        let { employees, options, tempEmployees } = this.state;
        return(
            <>
                <h2>Employees</h2>

                <select name='department' onChange={this.onSelectDept}>
                     <option selected value value="Department">Select Department</option>
                    {
                        options.map((item,idx) => {
                            return<option key={idx} >{item}</option>
                        })
                    }
                </select>
                <div>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Department</th>
                            </tr>   
                            
                        </thead>
                            
                        <tbody>
                            {tempEmployees.map((item,idx) => {
                                return(
                                    <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.department}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}



export default Select;