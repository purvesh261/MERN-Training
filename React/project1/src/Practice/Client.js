import React, { Component } from 'react';

class Client extends Component{
    constructor()
    {
        super();
        this.state = {Counter:0, clientData:[
            {clientID:123,clientName:'A1 Pvt Ltd',address:'New Delhi'},
            {clientID:124,clientName:'A2 Pvt Ltd',address:'Mumbai'},
            {clientID:125,clientName:'A3 Pvt Ltd',address:'Ahmedabad'},
            {clientID:126,clientName:'A4 Pvt Ltd',address:'Hyderabad'},
            {clientID:127,clientName:'A5 Pvt Ltd',address:'Kolkata'},
        ]};
        this.onClickHandler = this.onClickHandler.bind(this);
        
    }
    onClickHandler()
    {
        let { Counter } = this.state;
        Counter++;
        this.setState({Counter})
        console.log("Button is clicked... " + Counter)
    }
    render(){
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Client ID</th>
                            <th>Client Name</th>
                            <th>Address</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.clientData.map((item,idx)=>{
                            return (
                                <tr key={idx}>
                                    <td>{item.clientID}</td>
                                    <td>{item.clientName}</td>
                                    <td>{item.address}</td>
                                    <td><button className='btn btn-info'>Select</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <h1>Client</h1>
                <button className="btn btn-primary" onClick={this.onClickHandler}>Click {this.state.Counter}</button>
            </div>
            
        );
    }
}

export default Client;