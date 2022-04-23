import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api'

export const fetchCharactersAsync = createAsyncThunk(
    'characters/fetchData',
    async (url) => {
        return api.get(url)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
);

export const selectCharacter = createAction('characters/selectCharacter')