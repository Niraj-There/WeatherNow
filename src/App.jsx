import { useState } from 'react'
import './App.css'
import SearchBox from './SearchBox.jsx'
import WeatherInfo from './WeatherInfo.jsx'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
    icon: "50n"
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'black', fontWeight: 'bold' }}>
        Weather Widget
      </Typography>
      <SearchBox updateInfo={updateInfo} />
      <WeatherInfo info={weatherInfo} />
    </Box>
  )
}

export default App
