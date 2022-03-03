import React, { useState } from 'react';
import '../exam.css';
import axios from 'axios';

function Login(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ alert, setAlert ] = useState("")

    const loginHandler = async (event) => {
        event.preventDefault();
        var result = await axios.post('http://localhost:4000/login/', { username, password });

        if(result.data === false)
        {
            setAlert("Invalid username/password");
            setTimeout(() => setAlert(""), 2000)
        }
        else 
        {
            
            props.setLogin(true)
        }
        
    }

    return (
    <div>
        <form className='login-form' onSubmit={loginHandler}>
        { alert &&
            <div class="alert alert-danger m-1" role="alert">
                {alert}
            </div>}
            <div className='form-group mb-3'>
                <label htmlFor='username'>Username</label>
                <input type='text' className='form-control' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' required></input> 
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter username' required></input> 
            </div>
            <input type='submit' className='btn btn-primary' value="Login"></input>
        </form>
    </div>
    )
}

export default Login;