import React from 'react';
import { Grid, CircularProgress, Container } from '@mui/material';
import moment from 'moment';
import styled from 'styled-components'

import './App.css';
import CharacterSelect from './components/CharacterSelect'
import { useIsMovieLoading, useLastMovie, useMovies } from './state/movies/hooks';

const SubTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 1rem 0rem;
`
const Panel = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0rem;
  padding: 1rem;
  border: 1px solid #ddd;
  min-height: 300px;
  line-height: 1.5rem;
  border-radius: 5px;  
`
const BottomPanel = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0rem;
  border: 1px solid #ddd;
  line-height: 2rem;
  border-radius: 5px;
  padding: 1rem;
`

function App() {
  const movies = useMovies()
  const isMovieLoading = useIsMovieLoading()
  const lastMovie = useLastMovie()

  const handleRenderLastMovie = () => {
    if (lastMovie) {
      return (
        <div>
          {
            lastMovie.title
          }
          -
          {
            moment(lastMovie.created).year()
          }
        </div>
      )
    }

    return null
  }

  return (
    <div className="App">
      <Container
        style={{marginTop: 30}}
      >
        <Grid 
          container
          spacing={5}
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Grid item xs={8} textAlign="left">
            <SubTitle>
              Character:
            </SubTitle>
            <CharacterSelect />
            <SubTitle>
              List of Movies:
            </SubTitle>
            <Panel>
            {
              isMovieLoading ? 
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{height: '276px'}}
              >
                <CircularProgress />
              </Grid>
              : 
              movies.map(movie => <div key={movie.title}>{movie.title}</div>)
            }
            </Panel>
            <SubTitle>
              Name / Year last movie:
            </SubTitle>
            <BottomPanel>
            {
              handleRenderLastMovie()
            }
            </BottomPanel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
