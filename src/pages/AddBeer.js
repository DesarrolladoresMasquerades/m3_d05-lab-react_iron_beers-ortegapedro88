import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function AddBeer() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description:"",
    first_brewed: 0,
    brewers_tips:"",
    attenuation_level: 0,
    contributed_by:"",
    image_url:""
  });

  const handleSubmit = (event) => {
    
    event.preventDefault();
    axios
      .post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        formData
      )
      .then((newData) => navigate(`/beer/${newData._id}`))
      .catch((error) => navigate(`/new-beer`));    
  };

  function handleInput(event){
    const inputName = event.target.name;
    const value = event.target.value;
  
    setFormData((formData) => {
      return { ...formData, [inputName]: value };
    });
  }

  return (
    <div className="AddBeersPage">
    <NavBar/>
      <h3>Add New Apartment</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          value={formData.name}
        />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={handleInput}
          value={formData.tagline}
        />

        <label>Description</label>
        <textarea
          type="text"
          name="description"
          onChange={handleInput}
          value={formData.description}
        />
          <label>First brewed</label>
        <input
          type="number"
          name="first_brewed"
          onChange={handleInput}
          value={formData.first_brewed}
        />
          <label>Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleInput}
          value={formData.brewers_tips}
        />
          <label>Attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleInput}
          value={formData.attenuation_level}
        />
          <label>Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleInput}
          value={formData.contributed_by}
        />
        <label>Image URL</label>
        <input
          type="text"
          name="image_url"
          onChange={handleInput}
          value={formData.image_url}
        />        
        <button type="submit">Create Beer</button>        
      </form>
    </div>
  );
}

export default AddBeer;