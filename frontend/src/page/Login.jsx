import React from 'react'
import { useEffect } from 'react';
import Form from '../component/Form'
import Fields from '../Json/Main.json'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { user,useUser } from '../context/UserContext';
import api from '../api';

const Login = () => {
  
  const navigate = useNavigate();
  const { user,setUser } = useUser()

  const handleSession = async () => {
    try {
        const response = await api.post('/auth'); 
        setUser(response.data.user);
        navigate('/dashboard')
    } catch (error) {
        console.log('Login error:', error);
        navigate('/'); 
    }
};

  useEffect(() => {
        handleSession();
  },[user]); 


    const handleLogin = async (formData) => {
      try {
          console.log(formData);
            const response = await axios.post('http://localhost:3001/login', formData);
            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            setUser(user);
            navigate("/dashboard")
        } catch (error) {
            console.error('Login error:', error);
        }
    };

  return (
    <div className='flex items-center justify-center h-[100vh]'>
        <Form title="Login" fields={Fields} onSubmit={handleLogin}/>
    </div>
  )
}

export default Login