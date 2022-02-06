import React, { Component } from 'react';
import UserDetails from './Userdetails';

class User extends Component{
    render(){
        return (
            <>
                <h2 className="text-primary">User</h2>
                <UserDetails userRole="Admin"/>
            </>
        );    
    }
}

export default User;