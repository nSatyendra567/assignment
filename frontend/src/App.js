
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashboard';
import Adduser from './page/Adduser';
import Addstore from './page/Addstore';
import Rating from './page/Rating';
import Login from './page/Login';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Adduser' element={<Adduser/>} />
          <Route path='/Addstore' element={<Addstore/>} />
          <Route path='/Ratings' element={<Rating heading="Ratings" />} />
          <Route path='/Totaluser' element={<Rating heading="All Users" />} />
          <Route path='/Totalstore' element={<Rating heading="All Stores" />} />
          <Route path='/AllOwner' element={<Rating heading="All Owners" />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </div>
  );
}

export default App;
