
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import { useAuth } from '../AuthContext';
import image from "/Users/eraldhasani/Desktop/PetExpo/client/image.png";
const Navbar = (props) => {
    const { logout } = useAuth();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const userId = localStorage.getItem('userId');
    const userDataString = localStorage.getItem('user'); // Retrieve the string from localStorage
    const user = JSON.parse(userDataString);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/users/${userId}`, {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res.data)
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    const handleLogout = async (e) => {
        try {
            await logout();
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }




    return (


        <nav className="navbar navbar-light bg-light justify-content-between" style={{marginTop:"10px", borderRadius:"8px"}}>
            <div className="nav d-flex ">
                    <img className="image" src={image} alt="" />
                    <div>
                

                    </div>
                    <div>
                    <ul className="navbar-nav d-flex">
                    <li className="nav-item">
                    <a className="nav-link" href="#about">About us</a>
                    </li>
                    </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                        <a className="nav-link" href="#footer">Contact Us</a>
                        </li>
                        </ul>
                    </div>
                    <div>
                {  userId ? (
                        <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                        <Link className="nav-link " to="/create">Create</Link>
                        </li> 
                        </ul>)
                        : null
                    }
                    </div>
                    {  userId ? (
                                <div className="">
                                    <div>
                                      {user && user.role === 'client' && (
                                        <div>
                                       <ul className="navbar-nav d-flex mt-3">
                                        <li className="nav-item">
                                            <p className="nav-link">Admin: {user.firstName} {user.lastName}</p>
                                        </li>
                                        </ul>
                                        </div>
                                        )}
                                    </div>
                                  <div>
                                  <ul className="navbar-nav d-flex">
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={handleLogout}>Logout</a>
                                    </li> 
                                    </ul>
                                  </div>
                                </div>
                                
                            ) : (
                                <div className="d-flex">
                                     <ul className="navbar-nav d-flex">

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    </ul>
                                    <ul className="navbar-nav d-flex">

                                    <li className="nav-item">
                                        <Link className="nav-link " to="/register">Register</Link>
                                    </li>
                                    </ul>
                                </div>
                            )
                }
                  
            </div>
        </nav>    

    )
}
export default Navbar;





 