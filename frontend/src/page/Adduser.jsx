import React from 'react'
import { useEffect } from 'react'
import Sidebar from '../component/Sidebar'
import AdminSidebar from '../Json/AdminSidebar.json'
import Form from '../component/Form'
import Fields from '../Json/Adduser.json'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import { user,useUser } from '../context/UserContext';

const Adduser = () => {



  const navigate = useNavigate();

  const { user,setUser } = useUser();

    const handleLogin = async () => {
      try {
          const response = await api.post('/auth'); 
      } catch (error) {
          console.log('Login error:', error);
          navigate('/'); 
      }
    };

    useEffect(() => {
          handleLogin();
  }); 

  const handleSignup = async (formData) => {
    try {
        console.log(formData);
        const response = await api.post('/signup', formData);
          console.log(response.data);
          alert("user Registerd")
      } catch (error) {
          console.error('Login error:', error);
          alert("error while registration");
          navigate('/');
      }
  };
  return (
    <div className='flex'>
        <Sidebar data={AdminSidebar}/>
        <Form title="Add User" fields={Fields} onSubmit={handleSignup}/>
    </div>
  )
}

export default Adduser