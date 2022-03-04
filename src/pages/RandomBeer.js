import axios from "axios";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import marcoPic from "../assets/loading.png"
import NavBar from "../components/NavBar"

export default function RandomBeer(){

    const [randomBeer, setRandomBeer] = useState({});
    
    const params = useParams(); // same as req.params.apartmentId
  

  
    useEffect(() => {
      setTimeout(()=>{
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => setRandomBeer(response.data))
        .catch((error) => console.log(error));
      },1500)
      
    }, [params.beerId]);
  
    return randomBeer._id ? (
      <div key={randomBeer._id} >
        <NavBar/>
        <img src={randomBeer.image_url} alt="apartment" />
        <h3>{randomBeer.name}</h3>
        <h4>{randomBeer.tagline}</h4>
        <h5>First brewed on:{randomBeer.first_brewed}</h5>
        <p>Description: {randomBeer.description}</p>
        <h4>Contributed by: {randomBeer.contributed_by}</h4>
      </div>
    ) : (
      <div>
          <img src={marcoPic} alt="Marco Pic"/>
      </div>
    );
  }
  