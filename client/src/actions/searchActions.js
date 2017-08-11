import { SEARCH_FOR_MOVIE } from "./actionTypes"

export function searchForMovieAction(movieStr) {
    return {
        type: SEARCH_FOR_MOVIE,
        movieStr
    }
}