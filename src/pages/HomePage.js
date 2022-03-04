import { Link } from "react-router-dom"
import beersImg from "../assets/beers.png"
import newBeerImg from "../assets/new-beer.png"
import randomBeerImg from "../assets/random-beer.png"




export default function HomePage(){


    return(  
        <div>
            <Link to="/beers"><h1>All Beers</h1><br/><img src={beersImg} alt="Beers Pic"/></Link> 
            <Link to="/new-beer"><h1>Add New Beer</h1><br/><img src={newBeerImg} alt="New-beer Pic"/></Link> 
            <Link to="/random-beer"><h1>Random Beer</h1><br/><img src={randomBeerImg} alt="random-beer Pic"/></Link> 
        </div>
)
}


