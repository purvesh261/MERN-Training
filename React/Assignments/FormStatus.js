import React, { Component } from 'react';

class FormStatus extends Component{
    constructor(props){
        super();
        
    }
    render(){
        let { filled, passwordLength } = this.props;
        if(filled){
            if(passwordLength)
            {
                return(<div className="alert alert-success alert-dismissible fade show" role="alert">Success</div>);
            }
            else{
                return(<div className="alert alert-danger alert-dismissible fade show" role="alert">Password should be atleast 6 characters.</div>);
            }
        }
        else{
            return(<div className="alert alert-danger alert-dismissible fade show" role="alert">Please fill all fields</div>);
        }

    }
}

export default FormStatus;