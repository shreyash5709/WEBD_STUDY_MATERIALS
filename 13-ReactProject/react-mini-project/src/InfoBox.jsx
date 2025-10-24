import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1664547638890-b928d0fe3e4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3087";

    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800";

    const COLD_URL = "https://images.unsplash.com/photo-1641672222794-536ad524a929?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800";

    const RAIN_URL = "https://images.unsplash.com/photo-1630574232726-fc3ea90637b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJhaW55JTIwd2VhdGhlciUyMGluJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800";

    return(
        <div className="infoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {
                        info.humidity > 90 
                            ? RAIN_URL 
                            : info.temp > 15 
                                ? HOT_URL 
                                : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        &nbsp;
                        {
                        info.humidity > 90 
                            ? <ThunderstormIcon /> 
                            : info.temp > 15 
                                ? <SunnyIcon /> 
                                : <AcUnitIcon />
                        }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temprature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i><strong>{info.weather}</strong></i> and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    )
}