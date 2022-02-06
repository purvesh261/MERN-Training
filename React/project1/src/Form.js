import React, { Component } from 'react';
import FormStatus from './FormStatus';

class Form extends Component{
    constructor(){
        super();
        this.state = {filled:false,passwordLength:false,showAlert:false};
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        if (email && password){
            if (password.length >= 6){
                this.setState({filled:true, passwordLength: true, showAlert:true});
            }
            else{
                this.setState({filled:true, passwordLength: false, showAlert:true});
            }
        }
        else{
            this.setState({filled:false,showAlert:true});
        }
        console.log(this.state.success, this.state.showAlert)
    }

    render(){
        let { showAlert, filled, passwordLength } = this.state;
        return (
        <form className='formGroup mx-2 my-3' onSubmit={this.onFormSubmit}>
            {showAlert? <FormStatus filled={filled} passwordLength={passwordLength}/>: null}
            <label>Email:</label><br/>
            <input type="text" name="email"></input><br/>
            <label className='mt-3'>Password:</label><br/>
            <input  type="password" name="password"></input><br/>
            <input  type="submit" className='btn btn-primary mt-3'></input>
        </form>
        )
    }
}

export default Form;