import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export  default function SearchBox(){
    let [city, setCity] = useState("");
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = (evt)=>{
        console.log(city);
        evt.preventDefault();
        setCity("");
    }
    return(
        <div className='searchBox'>
            <h3>Search for the weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required value={city}
                    onChange={handleChange}
                />
                <br /><br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}