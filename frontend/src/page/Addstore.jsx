import React,{useEffect} from 'react'
import Sidebar from '../component/Sidebar'
import AdminSidebar from '../Json/AdminSidebar.json'
import Form from '../component/Form'
import Fields from '../Json/Addstore.json'
import api from '../api'
import { useNavigate } from 'react-router-dom'


const Addstore = () => {

  const navigate = useNavigate();

    const handleLogin = async () => {
      try {
          await api.post('/auth'); 
      } catch (error) {
          console.log('Login error:', error);
          navigate('/'); 
      }
    };

    useEffect(() => {
          handleLogin();
  }); 

  const handleregister = async (formData) => {
    let response
    try {
        formData.role = 'Shopkeeper';
        console.log(formData);
        response = await api.post('/register', formData);
          console.log(response.data);
          alert("user Registerd")
      } catch (error) {
          console.error('Login error:', error);
          if (error.response.data.message==="email allready exits") {
            alert("email allready exits");
          }else{
            alert("error while registration");
            navigate('/');
          }
      }
  };

  return (
    <div className='flex'>
        <Sidebar data={AdminSidebar}/>
        <Form title="Add Store" fields={Fields} onSubmit={handleregister}/>
    </div>
  )
}

export default Addstore