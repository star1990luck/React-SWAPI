import {useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharactersAsync, selectCharacter } from './actions';

export const useNextFetchUrl = () => {
    const selected = useSelector(state => state.characters.next);

    return selected
}

export const useCharacters = () => {
    const characters = useSelector(state => state.characters.data);

    return characters
};

export const useSelectedCharacterId = () => {
    const selected = useSelector(state => state.characters.selectedCharacterId);

    return selected
}

export const useCharactersHandler = () => {
    const dispatch = useDispatch();
    const url = useNextFetchUrl()
    const fetchCharacters = useCallback(() => dispatch(fetchCharactersAsync(url)), [dispatch, url])
    const onSelectCharacter = useCallback((character) => dispatch(selectCharacter(character)), [dispatch])
    return { fetchCharacters, onSelectCharacter }
};

