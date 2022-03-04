import axios from "axios";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import marcoPic from "../assets/loading.png"
import NavBar from "../components/NavBar"

export default function SingleBeer(){

    const [beer, setBeer] = useState({});
    
    const params = useParams(); // same as req.params.apartmentId
  

  
    useEffect(() => {
      setTimeout(()=>{
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
        .then((response) => setBeer(response.data))
        .catch((error) => console.log(error));
      },1500)
      
    }, [params.beerId]);
  
    return beer._id ? (
      <div key={beer._id} >
        <NavBar/>
        <img src={beer.image_url} alt="apartment" />
        <h3>{beer.name}</h3>
        <h4>{beer.tagline}</h4>
        <h5>First brewed on:{beer.first_brewed}</h5>
        <p>Description: {beer.description}</p>
        <h4>Contributed by: {beer.contributed_by}</h4>
      </div>
    ) : (
      <div>
          <img src={marcoPic} alt="Marco Pic"/>
      </div>
    );
  }
  