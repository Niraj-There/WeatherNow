import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      
      if (response.ok) {
        const result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feels_Like: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
          icon: jsonResponse.weather[0].icon,
        };
        return result;
      } else {
        setError(true);
        return null;
      }
    } catch (err) {
      setError(true);
      return null;
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false);
    setCity("");
    const newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo);
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="city" 
          label="City Name" 
          variant="outlined" 
          required
          value={city}
          onChange={handleChange}
          error={error}
          helperText={error ? "No such city found!" : ""}
          sx={{ mr: 2 }}
        />
        <Button 
          variant="contained" 
          type="submit"
          endIcon={<SearchIcon />}
          sx={{ height: '56px' }}
        >
          Search
        </Button>
      </form>
    </Box>
  );
}