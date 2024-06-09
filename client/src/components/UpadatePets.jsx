import React, { useEffect, useState } from 'react';
import { useNavigate,Link,useParams } from 'react-router-dom';
import axios from 'axios';
// import { useAuth } from '../AuthContex'
import { SocialIcon } from 'react-social-icons'
import video from "/Users/eraldhasani/Desktop/PetExpo/client/video.mp4";
import aa from "/Users/eraldhasani/Desktop/PetExpo/client/aa.png";
import codevider from "/Users/eraldhasani/Desktop/PetExpo/client/codevider_logo.jpeg";
import imagee from "/Users/eraldhasani/Desktop/PetExpo/client/image.png";
import Navbar from './Navbar';

const Upadate = () => {

    const { id } = useParams();
    const [pet, setPet] = useState([]);
    const [name, setName] = useState("");
    const [type,setType] = useState("");
    const [species, setSpecies] = useState("");
    const [family, setFamily] = useState("");
    const [habitat, setHabitat] = useState("");
    const [place_of_found, setPlace_of_found] = useState("");
    const [diet, setDiet] = useState("");
    const [color, setColor] = useState("");
    const [description, setDescription] = useState("");
    const [weight_kg, setWeight_kg] = useState(0);
    const [height_cm, setHeight_cm] = useState(0);
    const [temperament, setTemperament] = useState("");
    const [origin, setOrigin] = useState("");
    const [breed_group, setBreed_group] = useState("");
    const [size, setSize] = useState("");
    const [lifespan, setLifespan] = useState("");

    const [image, setImage] = useState("");
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');


    useEffect(() => {
        axios.get(`http://localhost:3000/pets/${id}`,{
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data)
            setName(res.data.pet.name);
            setType(res.data.pet.type);
            setSpecies(res.data.pet.species);
            setFamily(res.data.pet.family);
            setHabitat(res.data.pet.habitat);
            setPlace_of_found(res.data.pet.place_of_found);
            setDiet(res.data.pet.diet);
            setColor(res.data.pet.color);
            setDescription(res.data.pet.description);
            setWeight_kg(res.data.pet.weight_kg);
            setHeight_cm(res.data.pet.height_cm);
            setTemperament(res.data.pet.temperament);
            setOrigin(res.data.pet.origin);
            setBreed_group(res.data.pet.breed_group);
            setSize(res.data.pet.size);
            setLifespan(res.data.pet.lifespan);
            setImage(res.data.pet.image);

        })
        .catch((err) => console.log(err))
    }, [])
    const navigateBack = () => {
        navigate(-1);  // This will go back one step in the history
    };


    const UpdatePets=(e)=>{
        e.preventDefault();
        if(name.length<3){
            setErrors('Your form has some unsolved issues!');
        }
        else{
            const UpadatePet = {
                name: name,
                type: type,
                species: species,
                color: color,
                family: family,
                habitat: habitat,
                place_of_found: place_of_found,
                diet: diet,
                description: description,
                weight_kg: weight_kg,
                height_cm: height_cm,
                temperament: temperament,
                origin: origin,
                breed_group: breed_group,
                size: size,
                lifespan: lifespan,
                image: image,
                userId: userId,

            }
            
            axios.put(`http://localhost:3000/pets/update/${id}`, UpadatePet)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.errors){
                        setErrors(res.data.errors);
                    }
                    else{
                        setPet([...pet, res.data]);
                        navigate('/');
                    }

                })
                .catch((err)=>{
                    console.log(err);
                    setErrors("Your api has some problems!");
                })

        }
  
    }
    return (
        <>
 <div className="container">
                <Navbar />
                <div className='d-flex justify-content-between'>
            {  userId ? (
             <div>
                <button className='btn'  onClick={navigateBack}>Back</button>
              </div>
              )
             : null
            }
             <Link to="/">Back to Dashboard</Link>
            </div>
           
            <div className="video">
            <video className="mainVideo" src={video} autoPlay loop muted />
            </div>     
           
                   <h1>Update pet</h1>
         <div className='form'>

            <form onSubmit={(e)=>UpdatePets(e)}>
                 <div className='form-group m-3 '>
                    <label for="exampleFormControlSelect1">Type:</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={(e)=>setType(e.target.value)} value={type}>
                        <option value="" selected disabled>Select a type</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                        <option value="Bird">Bird</option>
                    </select>
                </div>
                    <div className="form-group m-3">
                        <label>Description:</label>
                        <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)}value={description} />
                    </div>  
                    <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className='form-group m-3'>
                                    <label>Pet Name:</label>
                                    <input type="text" className="form-control " onChange={(e)=>setName(e.target.value)} value={name} />
                                </div>
                            </td>
                            <td>
                                <div className="form-group m-3">
                                    <label>Image:</label>
                                    <input type="text" className="form-control " onChange={(e)=>setImage(e.target.value)} value={image}  />
                                </div>
                            </td>
                        </tr>
                                        
                        <tr>
                            <td colSpan="2">
                                {
                                    type === "Dog" && 
                                <div>
                                    <tr>
                                        <td>
                                            <div className="form-group m-3">
                                                <label>Breed Group:</label>
                                                <input type="text" className="form-control" value={breed_group} onChange={(e)=>setBreed_group(e.target.value)} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group m-3">
                                                <label>Size:</label>
                                                <input type="text" className="form-control" value={size} onChange={(e)=>setSize(e.target.value)} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className="form-group m-3">
                                            <label>Lifespan:</label>
                                            <input type="text" className="form-control" value={lifespan} onChange={(e)=>setLifespan(e.target.value)} />
                                        </div>
                                        </td>
                                        <td>

                                        <div className="form-group m-3">
                                            <label>Color:</label>
                                            <input type="text" className="form-control" value={color} onChange={(e)=>setColor(e.target.value)} />
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className="form-group m-3">
                                            <label>Lloji:</label>
                                            <input type="text" className="form-control" value={temperament} onChange={(e)=>setTemperament(e.target.value)} />
                                        </div>
                                        </td>
                                        <td>
                                            <div className="form-group m-3">
                                                <label>Origin:</label>
                                                <input type="text" className="form-control" value={origin} onChange={(e)=>setOrigin(e.target.value)} />
                                            </div>
                                        </td>
                                    </tr>
                                </div>
                                }

                                {type === "Cat" && (
                                    <div>
                                        <tr>
                                            <td>
                                                <div className="form-group m-3">
                                                    <label>Color:</label>
                                                    <input type="text" className="form-control" value={color} onChange={(e)=>setColor(e.target.value)} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-group m-3">
                                                    <label>Lloji:</label>
                                                    <input type="text" className="form-control" value={temperament} onChange={(e)=>setTemperament(e.target.value)} />
                                                </div>
                                            </td>
                                        </tr>
                                        <div className="form-group m-3">
                                            <label>Origin:</label>
                                            <input type="text" className="form-control" value={origin} onChange={(e)=>setOrigin(e.target.value)} />
                                        </div>

                                    </div>
                                )}
                                
                                {
                                    type === "Bird" &&
                                    <div>
                                        
                                        <tr>
                                            <td>
                                            <div className="form-group m-3">
                                                <label>Family:</label>
                                                <input type="text" className="form-control" value={family} onChange={(e)=>setFamily(e.target.value)} />
                                            </div>
                                            </td>
                                            <td>
                                            <div className="form-group m-3">
                                            <label>Lloji:</label>
                                                <input type="text" className="form-control" value={temperament}  onChange={(e)=>setTemperament(e.target.value)}/>
                                            </div>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <td>
                                                <div className="form-group m-3" >
                                                <label>Habitat:</label>
                                                    <input type="text" className="form-control" value={habitat}  onChange={(e) => setHabitat(e.target.value)} />
                                                </div>
                                                </td>
                                                    <td>
                                                <div className="form-group m-3">
                                                    <label>Place of found:</label>
                                                    <input type="text" className="form-control" value={place_of_found}  onChange={(e) => setPlace_of_found(e.target.value)} />
                                                </div>
                                            </td>
                                        </tr>   

                                        <tr>
                                            <td>
                                                <div className="form-group m-3">
                                                    <label>Height:</label>
                                                    <input type="number" className="form-control" value={height_cm}  onChange={(e)=>setHeight_cm(e.target.value)}/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-group m-3">
                                                    <label>Weight:</label>
                                                    <input type="number" className="form-control"  value={weight_kg} onChange={(e)=>setWeight_kg(e.target.value)}/>
                                                </div>
                                            </td>
                                        </tr>   
                                        
                                    </div>
                                }   
                            </td>
                        </tr>
                    </tbody>
                    </table>  
                
              <div className='d-flex justify-content-between'>
            {  userId ? (
             <div>
               <button className='btn' type="submit">Update</button>
              </div>
                        )
             : null
            }
             <Link to="/">Back to Dashboard</Link>
            </div>
                  
               
            </form>
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
export default Upadate;