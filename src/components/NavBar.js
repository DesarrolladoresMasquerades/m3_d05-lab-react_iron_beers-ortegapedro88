import { Link } from "react-router-dom";
import casita from "../assets/casita.png"

export default function NavBar(){



return(
<div className="NavBar ">
    <Link to="/">
<img  src={casita} alt="casita pic" width="100"/>
    </Link>
</div>

)
}