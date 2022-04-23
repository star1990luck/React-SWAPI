import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api'

export const fetchMoviesAsync = createAsyncThunk(
    'characters/fetchMovies',
    async (movieUrls) => {
        const moviePromises = movieUrls.map(movieUrl => {
            return api.get(movieUrl)
                .then(res => res.data)
                .catch(err => console.log(err))
        })

        return Promise.all(moviePromises).then(results => results)
    }
);