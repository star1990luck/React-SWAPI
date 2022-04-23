import reducer from './reducer'

describe("Character Reducer", () => {
    test('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                data: [],
                selectedCharacterId: 0,
                next: 'https://swapi.dev/api/people'
            }
        )
    })
})