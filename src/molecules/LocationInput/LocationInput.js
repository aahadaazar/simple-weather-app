import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

function LocationInput({ inputRef, getWeatherDetails, disabled }) {

  const handleSearchButton = () => {
    const cityName = inputRef.current.value.trim();
    if(cityName === ''){
      alert('Enter the city name');
      return;
    }
    getWeatherDetails(cityName);
  }

  return (
    <div className={'flex justify-center align-center'}>
      <Input disabled={disabled} width={200} placeholder='Input your Location' refObj={inputRef} />
      <Button
        style={{
          padding: 7
        }}
        disabled={disabled}
        text='Search'
        onClickFunc={handleSearchButton} />
    </div>
  )
}

LocationInput.propTypes = {
  getWeatherDetails: PropTypes.func,
  inputRef: PropTypes.object,
  disabled: PropTypes.bool,
}

export default LocationInput;

