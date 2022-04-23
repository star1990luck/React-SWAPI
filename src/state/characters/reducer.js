import { createSlice } from '@reduxjs/toolkit'
import { fetchCharactersAsync } from './actions'

const initialState = {
    data: [],
    selectedCharacterId: 0,
    next: 'https://swapi.dev/api/people'
}

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        selectCharacter: (state, action) => {
            state.selectedCharacterId = action.payload;
        }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCharactersAsync.fulfilled, (state, action) => {
        if (action.payload.results && action.payload.results.length) {
          state.data = [...state.data, ...action.payload.results];
          state.next = action.payload.next;
        }
      })
    },
  })

  export default charactersSlice.reducer