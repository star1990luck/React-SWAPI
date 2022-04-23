import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { fetchMoviesAsync } from './actions'

export const useMovies = () => {
    const movies = useSelector(state => state.movies.data);

    return movies
}

export const useIsMovieLoading = () => {
    const isLoading = useSelector(state => state.movies.loading);

    return isLoading
}

export const useLastMovie = () => {
    const movies = useMovies()
    if (movies.length) {
        const lastMovie = _.sortBy(movies, (movie => Date(movie)))[movies.length - 1]

        return lastMovie
    }
    
    return null
}

export const useMoviesHandler = () => {
    const dispatch = useDispatch();

    const fetchMovies = useCallback((movieUrls) => dispatch(fetchMoviesAsync(movieUrls)), [dispatch])
    return { fetchMovies }
}