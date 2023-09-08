import './App.css';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import Stack from './components/Stack';
import capitalize from './utils/capitalize';
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(undefined);
  const [animate, setAnimate] = useState(true);
  const [error, setError] = useState(null);
  const body = document.querySelector('body');

  useEffect(() => {
    getWeather('new york');
  }, []);

  async function getWeather(city) {
    try {
      const response = await fetch(
        `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${process.env.REACT_APP_WEATHER_KEY}&q=${formatCity(
          city
        )}&extra=isDayTime&num_of_days=1&date=today&format=json`
      );
      const weatherResponse = await response.json();
      const currentWeather = await weatherResponse.data.current_condition[0];
      const cityQuery = await weatherResponse.data.request[0].query;

      setWeather({
        city: cityQuery,
        temp: currentWeather.temp_F,
        description: currentWeather.weatherDesc[0].value,
        humidity: currentWeather.humidity,
        windSpeed: currentWeather.windspeedMiles,
        isDayTime: currentWeather.isdaytime,
      });
      setError(null);
    } catch (error) {
      setError('Please enter a location');
    } finally {
      setAnimate(true);
    }
  }

  function setSearchValue(event) {
    setSearch(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    getWeather(search);
    setSearch('');
    setAnimate(false);
  }

  function formatCity(city) {
    const capitalizeCity = capitalize(city);
    const replaceSpace = capitalizeCity.replace(/ /g, '+');

    return replaceSpace;
  }

  function setTheme() {
    if (weather.isDayTime === 'no') {
      body.setAttribute('data-theme', 'dark');
    } else {
      body.removeAttribute('data-theme');
    }
  }

  if (weather === undefined) {
    return (
      <div className="App">
        <span>Loading</span>
      </div>
    );
  }

  setTheme();

  return (
    <div className="App">
      <Stack className="main">
        <SearchBar
          handleSubmit={handleSubmit}
          search={search}
          setSearchValue={setSearchValue}
          error={error}
        />

        <Card
          animate={animate}
          city={weather.city}
          temp={weather.temp}
          description={weather.description}
          humidity={weather.humidity}
          windSpeed={weather.windSpeed}
          error={error}
        />
      </Stack>
    </div>
  );
}

export default App;
