import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link,useParams,useNavigate } from 'react-router-dom';
import video from "/Users/eraldhasani/Desktop/PetExpo/client/video.mp4";
import codevider from "/Users/eraldhasani/Desktop/PetExpo/client/codevider_logo.jpeg";
import image from "/Users/eraldhasani/Desktop/PetExpo/client/image.png";
import Navbar from "./Navbar";
import aa from "/Users/eraldhasani/Desktop/PetExpo/client/aa.png";
import { SocialIcon } from 'react-social-icons'
import  "../App.css";


const OnePet = () => {
    const [pet, setPet] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();

    const userId = localStorage.getItem('userId');  
     const userDataString = localStorage.getItem('user'); 
    const user = JSON.parse(userDataString);

    useEffect(() => {
        axios.get(`http://localhost:3000/pets/${id}`,{
            withCredentials: true,
        })
        .then((res) => {
            setPet(res.data.pet)
        })
        .catch((err) => console.log(err))
    }, [])

    const deletePet = (id) => {
        axios.delete(`http://localhost:3000/pets/delete/${id}`,{
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data)
            navigate('/')
        })
        .catch((err) => console.log(err))
    }
    return (
        <>
    <div className="container">

        <Navbar />
        <div>
            <div className='d-flex justify-content-between'>
                {  userId ? (
                <div >
                    <button className='btn btn-success ' > <Link style={{textDecoration:"none",color:"black"}} to={`/update/${pet._id}` }>Update {pet.name} </Link></button>
                </div>
                  ) : null
                }
                {  userId ? (
                <div>
                    <button className='btn btn-danger' onClick={() => deletePet(pet._id)}>Delete {pet.name}</button>
                </div>
                ) : null
                }
                <Link to="/">Back to Dashboard</Link>
                
            </div>

        </div>
  <div class="containere">


  <h1>{pet.name}</h1>
  <div className="">
            <img src={pet.image} alt="" style={{height:"400px"}}  />
            </div>
    <div>

        <div class="pet-info">

        <div class="pet-info1">
        {pet.type && (
            <p><strong>Type:</strong> {pet.type}</p>
        )}
        {pet.species && (
            <p><strong>Species:</strong> {pet.species}</p>
         )}
    
       {pet.temperament && (
            <p><strong>Lloji:</strong> {pet.temperament}</p>
        )}
          {pet.lifespan && (
            <p><strong>Lifespan:</strong> {pet.lifespan}</p>
        )}
        {pet.habitat && (
            <p><strong>Habitat:</strong> {pet.habitat}</p>
        )}
        {pet.place_of_found && (
            <p><strong>Place of Found:</strong> {pet.place_of_found}</p>
        )}
     
        </div>
        <div class="pet-info1">
    
            {pet.description && (
                <p><strong>Description:</strong> {pet.description} </p>
            )}
            {pet.family && (
                <p><strong>Family:</strong> {pet.family} </p>
            )}  
            {
            pet.height_cm && (
            <p> <strong>Height:</strong> {pet.height_cm} cm  </p>
            )}
       
            {pet.breed_group && (
            <p><strong>Breed Group:</strong> {pet.breed_group}</p>
             )}
        </div>
        <div class="pet-info1">
            {pet.colors && (
                <p><strong>Colors:</strong> {pet.colors} </p>
            )}
            {pet.origin && (
                <p><strong>Origin:</strong> {pet.origin} </p>
            )}
            {pet.size && (
                <p> <strong>Size:</strong> {pet.size}</p>
            )}
            {
            pet.weight_kg && (
                <p> <strong>Weight:</strong> {pet.weight_kg}  </p>
            )}
             {pet.diet && (
                <p> <strong>Diet:</strong> {pet.diet}</p>
            ) }
          
        </div>
    </div>
 
            {  userId ? (
             <div>
                <button className='btn btn-success'> <Link to={`/update/${pet._id}`}>Update</Link></button>
            </div>
                        )
             : null
            }
        </div>
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
        <footer className="" id="footer">
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
    )
}
export default OnePet;
