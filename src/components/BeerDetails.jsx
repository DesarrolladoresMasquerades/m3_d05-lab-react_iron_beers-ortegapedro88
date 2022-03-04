import React from 'react';

function SingleBeerDetails(props) {
  const { beerDetails } = props;

  const creatorNameCleaned = (creator) => {
    const symbol = creator.indexOf('<');
    const cleanedName = creator.slice(0, symbol);
    return cleanedName;
  };

  return (
    <div className="w-11/12 mx-auto p-2 border-2 rounded-md">
      <div className="w-full flex justify-center my-8">
        <img
          className="object-contain w-1/3"
          src={beerDetails.image_url}
          alt={beerDetails.name}
        />
      </div>
      <div className="flex justify-around my-4">
        <div>
          <h1 className="text-lg text-black font-semibold">
            {beerDetails.name}
          </h1>
          <p className="text-base font-medium text-gray-500">
            {beerDetails.tagline}
          </p>
        </div>
        <div className="flex flex-col justify-items-end">
          <p className="text-base font-medium text-gray-500">
            {beerDetails.attenuation_level}
          </p>
          <p>{beerDetails.first_brewed}</p>
        </div>
      </div>
      <p>{beerDetails.description}</p>
      <p className="text-sm font-medium text-gray-500 mt-4">
        {creatorNameCleaned(beerDetails.contributed_by)}
      </p>
    </div>
  );
}

export default SingleBeerDetails;
