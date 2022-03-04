import React from 'react';
import { Link } from 'react-router-dom';

function AddNewForm(props) {
  const {
    newBeerAdded,
    newBeerDetails: {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    },
    updateValues,
    submitForm,
    resetForm,
  } = props;

  return (
    <div className="w-11/12 mx-auto">
      {newBeerAdded === 'on process' && (
        <p className="text-center text-lg my-8 mx-4 ">
          Your beer is being added to the list. Thanks for contribuiting{' '}
          <span role="img" aria-label="clinking beer mugs">
            🍻
          </span>
        </p>
      )}

      {newBeerAdded === true && (
        <div className="flex flex-col items-center">
          <p className="text-center text-lg my-8 mx-auto">
            Your beer has been <strong>successfully added</strong>
            <span role="img" aria-label="clinking beer mugs">
              🍻
            </span>
          </p>
          <button className="bg-blue-500 rounded-md px-1 py-2 uppercase w-5/6 text-center text-white font-bold mb-5">
            <Link to="/">Go to Home Page</Link>
          </button>
          <button
            onClick={resetForm}
            className="bg-blue-500 rounded-md px-1 py-2 uppercase w-5/6 text-center text-white font-bold"
          >
            <Link to="/new-beer">Add a New Beer</Link>
          </button>
        </div>
      )}

      {newBeerAdded === false && (
        <form className="my-4 mx-2 w-full">
          <label htmlFor="name" className="font-semibold uppercase">
            Name
          </label>
          <br></br>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={updateValues}
            className="border px-3 py-2 rounded-md w-5/6 mb-4"
          />
          <br></br>

          <label htmlFor="tagline" className="font-semibold uppercase">
            Tagline
          </label>
          <br></br>
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={tagline}
            onChange={updateValues}
            className="border px-3 py-2 rounded-md w-5/6 mb-4"
          />
          <br></br>

          <label htmlFor="description" className="font-semibold uppercase">
            Description
          </label>
          <br></br>
          <textarea
            type="text"
            rows="10"
            cols="30"
            id="description"
            name="description"
            value={description}
            onChange={updateValues}
            className="border px-3 py-2 rounded-md w-5/6 mb-4"
          />
          <br></br>

          <label htmlFor="tagline" className="font-semibold uppercase">
            First Brewed
          </label>
          <br></br>
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            value={first_brewed}
            onChange={updateValues}
            className="border px-3 py-2 rounded-md w-5/6 mb-4"
          />
          <br></br>

          <label htmlFor="brewers_tips" className="font-semibold uppercase">
            Brewers Tips
          </label>
          <br></br>
          <input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            value={brewers_tips}
            onChange={updateValues}
            className="border px-3 py-2 rounded-md w-5/6 mb-4"
          />
          <br></br>

          <label
            htmlFor="attenuation_level"
            className="font-semibold uppercase"
          >
            Attenuation Level
          </label>
          <br></br>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            value={attenuation_level}
            onChange={updateValues}
            className="border px-3 py-2 rounded-md w-5/6 mb-4"
          />
          <br></br>

          <label htmlFor="contributed_by" className="font-semibold uppercase">
            Contributed By
          </label>
          <br></br>
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            value={contributed_by}
            onChange={updateValues}
            className="border px-3 py-2 rounded-md w-5/6 mb-4"
          />
          <br></br>

          <button
            type="submit"
            className="bg-blue-500 rounded-md px-1 py-2 uppercase w-5/6 text-center"
            onClick={submitForm}
          >
            Add new
          </button>
        </form>
      )}
    </div>
  );
}

export default AddNewForm;
