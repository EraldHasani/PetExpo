import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";    
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { SocialIcon } from 'react-social-icons'
import video from "/Users/eraldhasani/Desktop/PetExpo/client/video.mp4";
import image from "/Users/eraldhasani/Desktop/PetExpo/client/image.png";
import aa from "/Users/eraldhasani/Desktop/PetExpo/client/aa.png";
import codevider from "/Users/eraldhasani/Desktop/PetExpo/client/codevider_logo.jpeg";
import Navbar from "./Navbar";
const Dashboard = (e) => {
    
const [pets, setPets] = useState([]);
const [filter, setFilter] = useState("All"); // State to manage the filter
const [searchQuery, setSearchQuery] = useState(""); // State to manage the search query

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/pets",{
            withCredentials: true,
        })
            .then((res) => {
                console.log(res.data);

                setPets(res.data.pets);
            })
            .catch((err) =>
                 console.log(err));
    }
    , []);

    

    const handleFilterChange = (type) => {
        setFilter(type);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredPets = pets.filter(pet => {
        const typeMatch = pet.type ? pet.type.toLowerCase().includes(searchQuery.toLowerCase()) : false;
        const temperamentMatch = pet.temperament ? pet.temperament.toLowerCase().includes(searchQuery.toLowerCase()) : false;
        const habitatMatch = pet.habitat ? pet.habitat.toLowerCase().includes(searchQuery.toLowerCase()) : false;
        const originMatch = pet.origin ? pet.origin.toLowerCase().includes(searchQuery.toLowerCase()) : false;

        return (filter === "All" || pet.type === filter) &&
               (searchQuery === "" || typeMatch || temperamentMatch || habitatMatch || originMatch);
    });

    return (
        <>
     
        <div className="container">
            <Navbar />
        
            <form className="form-inline">
                    <div className="d-flex justify-content-center ">
                        <select className="form-select" id="selectpets" onChange={(e) => handleFilterChange(e.target.value)}>
                        <option value=""disabled selected >Select tipi</option>
                        <option value="All">All</option>
                        <option value="Bird">Birds</option>
                        <option value="Dog">Dogs</option>
                        <option value="Cat">Cats</option>
                        </select>
                    </div>
                </form>

        <div className="video">

            <video className="mainVideo" src={video} autoPlay loop muted />
        </div>
          

            <div className="d-flex justify-content-center my-4">
                <input type="text" className="form-control"style={{ maxWidth: "300px" }} placeholder="Search by type, family, habitat, or origin"
                     value={searchQuery} onChange={handleSearchChange} />
            </div>
    
            <div className="row" >
                {
                    filteredPets && filteredPets.length > 0 ? (
                        filteredPets.map((pet, index) => (
                            <div className="col-md-4 col-lg-3" style={{ marginTop: "30px"}} key={index}>
                                <div className="card" style={{ width: "100%",height:"105%",borderRadius:"8px"}}>                     
                                    <img className="card-img-top" src={pet.image} alt={pet.name} style={{borderRadius:"8px",height:"200px"}}/>
                                    <div className="card-body"  id="pets">
                                        <h5 className="card-title">{pet.type}</h5>
                                        <Popup trigger={<button className="btn btn-secondary"> {pet.name} </button>} position="right center">
                                            <div>
                                                {pet.type && (
                                                    <p> <strong>Type:</strong> {pet.type} </p>
                                                )}
                                                {pet.species && (
                                                    <p> <strong>Species:</strong> {pet.species}</p>
                                                )}
                                            
                                                {pet.temperament && (
                                                    <p><strong>Lloji:</strong> {pet.temperament} </p>
                                                )}
                                                {pet.lifespan && (
                                                    <p> <strong>Lifespan:</strong> {pet.lifespan}</p> 
                                                )}
                                                {pet.habitat && (
                                                    <p><strong>Habitat:</strong> {pet.habitat}  </p>
                                                )}
                                                {pet.place_of_found && (
                                                    <p> <strong>Place of Found:</strong> {pet.place_of_found}</p>
                                                )}
                                            </div>
                                           <button className="btn "> <Link to={`/pets/${pet._id}`}>View</Link></button>
                                            </Popup>

                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1>No pets found</h1>
                        </div>
                    )
                }
            </div>

            <div className="div-about d-flex" id="about">
            <div className="text-about w-75 align-items-center">
            <h1 className="animatedTitle">About Us</h1>
            <h5 className="animatedSubtitle">Our mission is to help pets find a home and to help pet owners find a new pet.</h5>
            <p className="animatedText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ducimus totam consequuntur iste accusantium neque voluptates tempore quasi repellat ipsam commodi, 
                eum dicta nihil culpa voluptate maiores non voluptas. Consequatur.</p>
        </div>
                <div>
                    <img src={aa} className="animatedImage" style={{width:"500px"}} alt="" />
                </div>
            </div>
       
       
       
            <footer className="footer" id="footer">
                    <div className="footer footer-content   align-items-center d-flex justify-content-evenly">
                        <div>
                            <video autoPlay loop muted src={video} width="200" height="200"></video>

                        </div>
                        <div className="footer-section about">
                            <div className="d-flex ">
                            <h1 className="logo-text m-3" >Pet Expo</h1>
                            <img src={codevider} style={{width:"50px",height:"50px"}} alt="" />
                            </div>
                            <p>  We help to find the best everything for your needs. </p>
                        </div>

                        <div className="socials small m-5">
                            <SocialIcon className="m-2" url="https://www.facebook.com/" />
                            <SocialIcon className="m-2" url="https://www.instagram.com/" />
                            <SocialIcon className="m-2" url="https://www.twitter.com/" />
                            <SocialIcon className="m-2" url="https://www.youtube.com/" />

                            <div className="contact m-3">
                                <span><i className="fas fa-phone"> Celular :</i> &nbsp; (+355)69123456</span>
                            </div>
                        </div>
                    </div>

                </footer>
       

        </div>
        </>
    );
    }
    export default Dashboard;
