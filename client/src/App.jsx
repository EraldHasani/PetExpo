import { useState } from 'react';
import {AuthProvider, useAuth} from "./AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CreatePets from './components/CreatePets';
import OnePet from './components/OnePet';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import UpadatePets from './components/UpadatePets';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  const [pets, setPets] = useState([]);
  const { user } = useAuth();
  const token = localStorage.getItem('token');


  return (
    <>
      <BrowserRouter>
        <Routes>
        {token ? (
          
         <>
            <Route path="/create" element={<CreatePets user={user}  />} />
              <Route path="/" element={<Dashboard pets={pets} setPets={setPets}user={user} />} />
              <Route path="/pets/:id" element={<OnePet />} />
              <Route path="/login" element={<Login />} />
              <Route path='/update/:id' element={<UpadatePets user={user}/>} />
              <Route path="/register" element={<Register />} />

        </>
          ) : (

            <>  
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Dashboard  />} />
            <Route path="/pets/:id" element={<OnePet />} />


            </>
          
          )
          } 

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App