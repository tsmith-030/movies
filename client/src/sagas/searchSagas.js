import { takeEvery } from 'redux-saga'
import { call } from 'redux-saga/effects'
import {searchData} from "../httpClient"
import * as types from  "../actions/actionTypes"
import { withApiErrorHandling } from "../helpers/sagaHelpers"
import {searchForMovieAction} from "../actions/searchActions";

export function* watchSearchForMovie() {
    yield* takeEvery(types.SEARCH_FOR_MOVIE, searchForMovie)
}

export function* searchForMovie(searchForMovieAction) {
    yield* withApiErrorHandling(function*() {
        yield call(searchData, "/api/v1/movies", searchForMovieAction.movieStr)
    }, searchForMovieAction);
}