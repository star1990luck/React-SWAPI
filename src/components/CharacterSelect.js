import React, { useEffect, useState } from 'react'
import Select from 'react-select';

import { useCharacters, useCharactersHandler, useSelectedCharacterId} from '../state/characters/hooks'
import { useMoviesHandler } from '../state/movies/hooks'

const CharacterSelect = () => {
    const {fetchCharacters, onSelectCharacter} = useCharactersHandler();
    const {fetchMovies} = useMoviesHandler()
    const [options, setOptions] = useState([])
    const characters = useCharacters()
    const selectedCharacterId = useSelectedCharacterId()
    // console.log(characters, selectedCharacterId)
    useEffect(() => {
        setOptions(characters.map((character, key) => ({ value: key, label: character.name  })))
    }, [characters])


    useEffect(() => {
        fetchCharacters()
    }, [fetchCharacters]);

    const handleChangeCharacter = (option) => {
        fetchMovies(characters[option.value].films);
        onSelectCharacter(option.value);
    }
    
    const handleMenuScrollToBottom = () => {
        fetchCharacters();
    }

    return (
        <Select options={options} value={options[selectedCharacterId]} onChange={handleChangeCharacter} onMenuScrollToBottom={handleMenuScrollToBottom} />    
    )
};

export default CharacterSelect;