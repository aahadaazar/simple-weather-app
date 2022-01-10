import React from 'react';
import PropTypes from 'prop-types';
import './WeatherCard.css';

function WeatherCard({ data }) {
  return (
    <div className='weather-card'>
      <h1 className={'headings'}>{data.name}</h1>
      <h2 className={'headings'}>{data.description}</h2>
      <img src={data.iconSrc} alt='icon' />
      <h2>Temp : {data.temp}</h2>
      <h3>Feels Like : {data.feelsLike}</h3>
      <h3>Max Temperature : {data.tempMax}</h3>
      <h3>Min Temperature : {data.tempMin}</h3>
    </div>
  )
}

WeatherCard.propTypes = {
  data: PropTypes.object
};

export default WeatherCard;

