import React, { Component } from 'react';

class Employee extends Component {
    constructor () {
        super();
        this.state = {
            Emp:{
                EmpId: 101,
                EmpName: "Purvesh",
                Salary: 60000
            }
        }
    }

    render() {
        let { Emp } = this.state;
        return (
            <>
            <p>Employee ID : { Emp.EmpId }</p>
            <p>Name: { Emp.EmpName }</p>
            <p>Salary: { Emp.Salary }</p>
            </>
        )
    }
}

export default Employee;