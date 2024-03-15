import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const Login = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    async function handleSubmit(e){
       
        e.preventDefault();
        try{
            const res = await axios.post("https://employee-management-server-seven.vercel.app/adminlogin",{
            email: values.email,
            password: values.password
            })

            if(res.status == 200){
                localStorage.setItem('admintoken' , values.email);
                navigate("/dashboard");
            }
        }
        catch(e){
            console.log(e);
            alert("Wrong Email and Password")
        }

    }


  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                     onChange={(e) => setValues({...values, email : e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'> 
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type="password" name='password' placeholder='Enter Password'
                     onChange={(e) => setValues({...values, password : e.target.value})} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
            </form>
            <p className="d-flex mx-2">Don't have an account? <Link to="/adminsignup">Signup</Link></p>      

        </div>
    </div>
  )
}

export default Login