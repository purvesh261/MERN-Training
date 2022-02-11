import React, { Component } from 'react';

class Display extends Component {
    constructor()
    {
        super();
        this.state = {total:0, fullName: "", email:""}
    }

    onCounter = (value) => {
        let { total } = this.state;
        total += value;
        this.setState({ total });
    }

    onInputChange = (event) => {
        let { name, value } = event.target;
        console.log("Input box changed", name, value);
        if(name ==='fullName'){
            this.setState({fullName: value});
        }
        else if(name === 'email'){
            this.setState({email: value})
        }
        
    }

    render()
    {
        let { total, fullName, email } = this.state;
        console.log("name", fullName, "email", email);
        return(
            <>
                <h2>Total: { total }</h2>
                <br/>
                <button className='btn btn-primary m-1 px-4' onClick={() => this.onCounter(10)}>10</button>
                <button className='btn btn-primary m-1 px-4' onClick={() => this.onCounter(20)}>20</button>
                <button className='btn btn-primary m-1 px-4' onClick={() => this.onCounter(30)}>30</button>
                <button className='btn btn-primary m-1 px-4' onClick={() => this.onCounter(40)}>40</button>
                <button className='btn btn-primary m-1 px-4' onClick={() => this.onCounter(50)}>50</button><br/>
                <button className='btn btn-primary m-1 px-4' onClick={() => this.onCounter(-this.state.total)}>Reset</button><br/>
                <div className='form-group'>
                    <label>Full Name:</label>
                    <input type="text" className="form-control w-25" name="fullName" value={fullName} onChange={this.onInputChange}></input><br/>
                    <label>Email:</label>
                    <input type="text" className="form-control w-25" name="email" value={email} onChange={this.onInputChange}></input><br/>
                </div>
                
            </>
        )
    }
}

export default Display;