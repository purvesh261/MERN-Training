import React, { Component } from 'react';

class Users extends Component{
    constructor()
    {
        super();
        this.state = {status:"-", showDeleteModel: false, selectedIndex:-1,
         userData:[
            {UserID:1,userName:'Purvesh',status:"Active"},
            {UserID:2,userName:'Ashish',status:"Active"},
            {UserID:3,userName:'Rahul',status:"Disabled"},
            {UserID:4,userName:'Aditya',status:"Active"},
            {UserID:5,userName:'Shubham',status:"Disabled"},
        ]};
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteYes = this.onDeleteYes.bind(this);
        this.onDeleteNo = this.onDeleteNo.bind(this);

    }

    onDelete = (rowIndex) => {
        this.setState({showDeleteModel: true, selectedIndex: rowIndex})
    }
    onDeleteYes = () =>{
        let { userData } = this.state;
        userData.splice(this.state.selectedIndex, 1);
        this.setState({userData, showDeleteModel:false});
    }

    onDeleteNo = () => {
        this.setState({showDeleteModel: false})
    }

    onClickHandler(userStatus)
    {
        this.setState({status: userStatus})
    }
    
    render(){
        return(
            <div>
                <h4>User Status: { this.state.status }</h4>
                {
                    this.state.showDeleteModel?
                    <div>
                        <h2>Are you sure you want to delete this record?</h2>
                        <button className='btn btn-info mr-5' onClick={this.onDeleteYes()}>Yes</button>
                        <button className='btn btn-info mr-5' onClick={this.onDeleteNo()}>No</button>
                    </div>: null
                    }
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Select</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.userData.map((user,idx)=>{
                        return (
                            <tr key={idx}>
                                <td>{user.UserID}</td>
                                <td>{user.userName}</td>
                                <td><button className='btn btn-primary' onClick={() => this.onClickHandler(user.status)}>View Status</button></td>
                                <td><button className='btn btn-danger' onClick={() => this.onDelete(idx)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
            </div>
            
        );
    }
}

export default Users;