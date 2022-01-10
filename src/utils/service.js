import axios from "axios";

export const getReverseGeocodingDataService = ({ lat, long }) => {
  return axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=50b68c6164514ffc8f240af4e046f588`).then(res => {
    return (res);
  })
};

export const getWeatherDetailsService = (city) =>{
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=ad2bbec530dfcba016cd2565ce48c045`).then(res => {
    return (res);
  })
};
