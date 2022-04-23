import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../state/characters/reducer';
import moviesReducer from '../state/movies/reducer'

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    movies: moviesReducer,
  },
});
