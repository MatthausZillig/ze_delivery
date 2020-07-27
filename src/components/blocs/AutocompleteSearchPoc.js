import React, { useState } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Link, withRouter } from 'react-router-dom';
import { InputSearch } from '../ui/InputSearch';
import { Suggestions } from '../ui/Suggestions';
import useOnclickOutside from 'react-cool-onclickoutside';

export const AutocompleteSearchPoc = ({ goToProductPage }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const [coordinates, setCoordinates] = useState();
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();
    // Get latitude and longitude
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setCoordinates((state) => (state = { lat, lng }));
        localStorage.setItem('lat', lat);
        localStorage.setItem('lng', lng);
        const newDate = new Date();
        let formatedDate = newDate.toISOString();
        localStorage.setItem('date', formatedDate);
        goToProductPage();
      })
      .catch((error) => {
        console.log('😱 Error: ', error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;
      return (
        <li key={id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <InputSearch
        value={value}
        callback={handleInput}
        disabled={!ready}
        placeholder="Insira o endereço com número"
      />
      {status === 'OK' && <Suggestions>{renderSuggestions()}</Suggestions>}
    </div>
  );
};
