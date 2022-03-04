import axios from 'axios';
import React, { useState } from 'react';
import AddNewForm from '../components/AddNewForm';
import Header from '../components/Header';

const initialState = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: Number(''),
  contributed_by: '',
};

function NewBeer() {
  const [newBeer, setNewBeer] = useState(initialState);
  const [isBeerAdded, setIsBeerAdded] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setNewBeer({
      ...newBeer,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsBeerAdded('on process');
    const submitBeerToApi = async (beer) => {
      try {
        const {
          data: { message: creationMessage },
        } = await axios.post(
          'https://ih-beers-api2.herokuapp.com/beers/new',
          beer
        );
        setIsBeerAdded(true);
        window.alert(creationMessage);
      } catch (error) {
        console.log(error);
      }
    };
    submitBeerToApi(newBeer);
  };

  const handleResetForm = () => {
    setNewBeer(initialState);
    setIsBeerAdded(false);
  };

  return (
    <>
      <Header />
      <div className="my-4">
        <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-500">
          Add a New Beer
        </h1>
        <AddNewForm
          newBeerAdded={isBeerAdded}
          newBeerDetails={newBeer}
          updateValues={handleInput}
          submitForm={handleFormSubmit}
          resetForm={handleResetForm}
        />
      </div>
    </>
  );
}

export default NewBeer;
