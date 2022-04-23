import { createSlice } from '@reduxjs/toolkit'
import { fetchMoviesAsync } from './actions'

const initialState = {
    data: [],
    loading: false,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(fetchMoviesAsync.pending, (state, action) => {
        state.loading = true
        state.data = []
      })
    },
  })

  export default moviesSlice.reducer