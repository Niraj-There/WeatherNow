import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function WeatherInfo({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1580193483759-bbc72f8e8c64?w=500";
  
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500";
  const COLD_URL = "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500";
  const RAIN_URL = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500";

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
      <Card sx={{ maxWidth: 400, boxShadow: 3 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={
            info.humidity > 80 
              ? RAIN_URL 
              : info.temp > 15 
              ? HOT_URL 
              : COLD_URL
          }
          title="weather image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {info.city}
            {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" component="div" sx={{ mt: 2 }}>
            <Box sx={{ mb: 1 }}>
              <strong>Temperature:</strong> {info.temp}°C
            </Box>
            <Box sx={{ mb: 1 }}>
              <strong>Humidity:</strong> {info.humidity}%
            </Box>
            <Box sx={{ mb: 1 }}>
              <strong>Min Temp:</strong> {info.tempMin}°C
            </Box>
            <Box sx={{ mb: 1 }}>
              <strong>Max Temp:</strong> {info.tempMax}°C
            </Box>
            <Box sx={{ mb: 1 }}>
              <strong>Weather:</strong> {info.weather} - Feels like {info.feels_Like}°C
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
