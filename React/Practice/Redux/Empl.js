import React from 'react';
// importing store to communicate or sending requests
import store from './store/store.js';
// import action here
import AddEmployee from './action/emp.js';

function Empl() {
    const onAddEmployee = () => {
        console.log("Employee Add Request");
        store.dispatch(AddEmployee({empid:"1", empname:"purvesh"}))
    }

    const onGetEmployee = () => {
      let Result = store.getState();
      console.log(Result)
    }
  return (
    <>
        <h5>Add Employee</h5>
        <button onClick={onAddEmployee}>Add Employee</button>
        <button onClick={onGetEmployee}>Get Employee</button>
    </>
  )
}

export default Empl;