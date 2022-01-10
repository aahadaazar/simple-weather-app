export const makeCoordsDataService = ({ coords }) => {
  return {
    lat: coords.latitude,
    long: coords.longitude
  };
};

const convertToCelsiusString = (temp) => {
  let tempString = Math.floor(temp - 273.15);
  return `${tempString}°C`
}

export const transformWeatherData = (data) => {
  const { main } = data;
  const weather = data.weather[0];
  return {
    name: data.name,
    description : weather.description.charAt(0).toUpperCase() + weather.description.substring(1),
    temp: convertToCelsiusString(main.temp),
    feelsLike: convertToCelsiusString(main.feels_like),
    tempMin: convertToCelsiusString(main.temp_min),
    tempMax: convertToCelsiusString(main.temp_max),
    iconSrc: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
  }
}