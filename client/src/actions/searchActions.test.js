import { SEARCH_FOR_MOVIE } from "./actionTypes"
import { searchForMovie } from "./searchActions"

describe('Search Actions', () => {
    it('creates searchForMovie Action', () => {
        expect(searchForMovie("X")).toEqual({
            type: SEARCH_FOR_MOVIE,
            movieStr: "X"
        })
    })
})