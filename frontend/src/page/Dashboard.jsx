import Sidebar from '../component/Sidebar'
import AdminSidebar from '../Json/AdminSidebar.json'
import AdminDashboard from '../component/AdminDashboard'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import api from '../api';

const Dashboard = () => {
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
          const response = await api.post('/auth'); 
          setUser(response.data.user);
      } catch (error) {
          console.log('Login error:', error);
          navigate('/'); 
      }
    };

    useEffect(() => {
        if (!user) {
            handleLogin();
        }
    }); 

    if (!user) {
        return <div className='flex align-middle justify-center h-[100vh] w-[100vw]'>Loading...</div>;
    }
  
  return (
    <div className='flex'>
      {
      (user.role==="Admin")&&
      <>
        <Sidebar data={AdminSidebar}/>
        <AdminDashboard/>
        </>
      }
    </div>
  )
}

export default Dashboard