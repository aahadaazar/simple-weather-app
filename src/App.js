import './App.css';
import { useRef, useState } from "react";
import { getReverseGeocodingDataService, getWeatherDetailsService } from './utils/service';
import { makeCoordsDataService, transformWeatherData } from './utils/helper';
import Button from './atoms/Button/Button';
import Loader from './atoms/Loader/Loader';
import LocationInput from './molecules/LocationInput/LocationInput';
import WeatherCard from './molecules/WeatherCard.js/WeatherCard';

function App() {
  const [loading, setLoading] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState();
  const inputRef = useRef(null);

  const getCoordLocation = () => {
    if (loading) return;
    setLoading(true);
    inputRef.current.value = '';
    navigator.geolocation.getCurrentPosition((position) => {
      const coordsData = makeCoordsDataService(position);
      getReverseGeocodingDataService(coordsData).then(res => {
        const cityName = res.data.results[0].components.city.trim();
        getWeatherDetails(cityName);
      }, err => {
        if (err.status !== 200) {
          setLoading(false);
          alert('Something went wrong! Please refresh your browser and try again');
        }
      });
    });
  }

  const getWeatherDetails = (cityName) => {
    if (loading) return
    if (weatherDetails) setWeatherDetails();
    setLoading(true);
    getWeatherDetailsService(cityName).then(res => {
      const transformedWeatherDetails = transformWeatherData(res.data);
      setWeatherDetails(transformedWeatherDetails);
      setLoading(false);
    }, err => {
      setLoading(false);
      console.log(err.response.message);
    });
  }

  return (
    <div className="App">
      <h1>Simple Weather App</h1>
      <Button
        style={{
          margin: 10,
          marginTop: 20,
          height: 40,
        }}
        disabled={loading}
        text='Click Here'
        onClickFunc={getCoordLocation} />
      <h2>OR</h2>
      <LocationInput
        disabled={loading}
        inputRef={inputRef}
        getWeatherDetails={getWeatherDetails}
      />
      {loading ? <Loader />
        : weatherDetails
          ? <WeatherCard
            data={weatherDetails}
          />
          : null}
    </div>
  );
}

export default App;
