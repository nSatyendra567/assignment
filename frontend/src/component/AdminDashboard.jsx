import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api';

const AdminDashboard = () => {
  const[Totaluser,SetTotal]=useState(null);
  const[Totalshop,Setshop]=useState(null);
  const[rating,Setrating]=useState(null);
  const[admin,Setadmin]=useState(null);
  const[normaluser,Setuser]=useState(null);
  const[shopk,Setshopk]=useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
          const response = await api.post('/dashboard'); 
          console.log(response.data);
          SetTotal(response.data.totalUsers);
          Setshop(response.data.totalShops);
          Setrating(response.data.totalRatings);
          Setadmin(response.data.Admin);
          Setuser(response.data.User);
          Setshopk(response.data.Shopkeeper);

      } catch (error) {
          console.log('Login error:', error);
          navigate('/'); 
      }
  };

    useEffect(() => {
      handleLogin();

    }); 

    if (Totaluser===null) {
        return <div className='flex align-middle justify-center h-[100vh] w-[100vw]'>Loading...</div>;
    }
  return (
    <div className='flex w-full h-[100vh]  justify-evenly ml-10 flex-col'>
        <div className='flex justify-evenly items-center w-full'>
            <div className='border-2 border-black p-10 rounded-md'>Total User
                <p>{Totaluser}</p>
            </div>
            <div className='border-2 border-black p-10 rounded-md'>Total Shop
                <p>{Totalshop}</p>
            </div>
            <div className='border-2 border-black p-10 rounded-md'>Total Ratings
                <p>{rating}</p>
            </div>
        </div>
        <div className='flex justify-evenly items-center w-full'>
            <div className='border-2 border-black p-10 rounded-md'>Total Admin
                <p>{admin}</p>
            </div>
            <div className='border-2 border-black p-10 rounded-md'>Total Normal user
                <p>{normaluser}</p>
            </div>
            <div className='border-2 border-black p-10 rounded-md'>Total Shopkeeper
                <p>{shopk}</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default AdminDashboard