import { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom";


function ListBeers (){
    const [allBeers, setAllBeers] = useState([]);

    useEffect(() => {
      axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response=>setAllBeers(response.data))
    }, []);


    function handleInput(event){
        // const input = event.target.name
        const value = event.target.value

        axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then((response)=>{setAllBeers(response.data)})

    }
  
    return (
      <div>
       <NavBar />
        <h1>List of Beers</h1>
        <label>Seach Beers: 
        <input name="query" value={allBeers.name} onChange={handleInput}/>
        </label>

  
        {allBeers.map((beer) => (
          <div key={beer._id} >
          <Link to={`/beer/${beer._id}`} > 
            <img src={beer.image_url} alt="beer pic" />
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <p>Contributed_by:: {beer.tagline}</p>
          </Link>
          </div>
          
        ))}
      </div>
    );
  
  
}



export default ListBeers;