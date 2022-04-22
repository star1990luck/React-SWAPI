import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function DataFetching() {

    const [char, setChar] = useState('')

    useEffect(() => {
        axios.get('https://swapi.dev/api/films/')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <FormControl sx={{ m: 2, minWidth: 120 }}>
            <Select
                labelId="movie-select-label"
                id="movie-simple-select"
                value={char}
                label="Character"
                onChange={handleChange}
            >
                <MenuItem value={'All'}></MenuItem>
                <MenuItem value={'Vendors'}></MenuItem>
                <MenuItem value={'Operators'}></MenuItem>
            </Select>
        </FormControl>
    )
}

export default DataFetching
