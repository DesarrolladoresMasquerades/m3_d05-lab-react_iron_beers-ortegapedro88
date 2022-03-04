import React from 'react';
import { Link } from 'react-router-dom';

function BeerCard({ beerDetails }) {
  const { image_url, name, tagline, contributed_by, _id } = beerDetails;

  return (
    <Link to={`/beers/${_id}`}>
      <div className="flex w-11/12 mx-auto rounded overflow-hidden h-48 border shadow shadow-lg my-4">
          <img className="block w-1/4 object-contain p-5" src={image_url} alt={name} />
        <div className="py-5 flex flex-col items-center justify-center space-y-1.5 w-3/4">
          <h1 className="text-lg text-black font-semibold">{name}</h1>
          <p className="text-base font-medium text-gray-500">{tagline}</p>
          <p>
            <strong>Created by:</strong> {contributed_by || 'Unknown creator'}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BeerCard;
