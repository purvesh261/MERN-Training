// Action name is AddEmployee
const AddEmployee = function(Employee)
{
    console.log("Action is called");
    return {type:'ADD-EMPLOYEE', payload:{empid:"1", empname:"purvesh"}}
}

export default AddEmployee;