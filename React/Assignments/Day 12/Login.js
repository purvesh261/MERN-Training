import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    const [users, setUsers] = useState();
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/login").then((response) => {
            setUsers(response.data);
        });
    },[])

    const onSubmit = (event) =>{
        event.preventDefault();

        let user = users.find((item) => {
            return item.userid === userId;
        })

        if(user){
            if(user.password === password)
            {
                user.admin? navigate("/dashboard-admin"): navigate("/dashboard");
            }
            else{
                setAlert(true)
            }
        }
        else
        {
            setAlert(true);
        }

    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <h5>Login</h5>
                { 
                alert? 
                <div className="alert alert-danger w-25" role="alert">
                    Invalid Username/Password.
                </div>: null
                }

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control m-1 w-25" onChange={(e)=>setUserId(e.target.value)} placeholder="Enter your username"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control m-1 w-25" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-success m-1'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Login