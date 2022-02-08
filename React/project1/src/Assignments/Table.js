import React, { Component } from 'react';

class Table extends Component{
    constructor()
    {
        super();
        this.state = {status:"-", userData:[
            {UserID:1,userName:'Purvesh',status:"Active"},
            {UserID:2,userName:'Ashish',status:"Active"},
            {UserID:3,userName:'Rahul',status:"Disabled"},
            {UserID:4,userName:'Aditya',status:"Active"},
            {UserID:5,userName:'Shubham',status:"Disabled"},
        ]};
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(userStatus)
    {
        this.setState({status: userStatus})
    }
    
    render(){
        return(
            <div>
                <h4>User Status: { this.state.status }</h4>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.userData.map((user,idx)=>{
                        return (
                            <tr key={idx}>
                                <td>{user.UserID}</td>
                                <td>{user.userName}</td>
                                <td><button className='btn btn-primary' onClick={() => this.onClickHandler(user.status)}>View Status</button></td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
            </div>
            
        );
    }
}

export default Table;