import React, { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { GlobalContext } from '../context/GlobalState';
import { getWeatherData } from '../context/actions/getWeatherData';
import { GET_WEATHER_STATE_RESET } from '../context/actionTypes/weatherActionTypes';


const Weather = () => {
    const { weatherState, weatherDispatch } = useContext(GlobalContext);
    console.log(weatherState, "tessstttt")

    const { getWeatherInitData: { data, error, errorMessage, loading } } = weatherState;
    const [city, setCity] = useState("");

    const handleClick = () => {
        weatherDispatch({
            type: GET_WEATHER_STATE_RESET
        })
        getWeatherData(city)(weatherDispatch)
        setCity("");
    }

    useEffect(() => {
        getWeatherData("kurnool")(weatherDispatch)
    }, [])

    return loading ? (<CircularProgress />) : error ? (<h1>{errorMessage}</h1>) : (
        <div>
            <h1>Weather Api</h1>
            <TextField id="outlined-basic" label="Enter City Name" variant="outlined" onChange={(e) => setCity(e.target.value)} value={city} />
            <br />
            <br />
            <Button variant="contained" onClick={handleClick} >Submit</Button>
            <br />
            <h1>City: {data?.name}</h1>
            <h2>Temperature: {data?.main?.temp}°C</h2>
        </div>
    )
}

export default Weather