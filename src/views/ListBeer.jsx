import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';

function ListBeer() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBeersFromApi = async () => {
      try {
        const beersFromApi = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
        );
        setBeers(beersFromApi.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getBeersFromApi();
  }, [query]);

  const handdleFilterByQuery = (e) => setQuery(e.target.value);

  return (
    <>
      <Header />
      <SearchBar query={query} filterByQuery={handdleFilterByQuery} />
      {isLoading && <Spinner />}
      {beers.map((beer) => {
        return <BeerCard beerDetails={beer} key={beer._id} />;
      })}
      {beers.length === 0 && (
        <p className="w-10/12 mx-auto">
          Oups we run out this one! Don't worry be hoppy, there are plenty more
          <span role="img" aria-label="beer emoji">
            🍻
          </span>
        </p>
      )}
    </>
  );
}

export default ListBeer;
