jest.unmock("./searchSagas")
jest.unmock("../../src/actions/searchActions")
// jest.unmock("../../src/helpers/sagaHelpers")
// jest.unmock("../../testHelpers/sagaTestHelper")

import { call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import * as sagas from './searchSagas'
import { searchData } from '../../src/httpClient'
import * as searchActions from '../actions/searchActions'
import * as sagaHelper from '../testHelpers/sagaTestHelper'

describe('Search Sagas', () => {

    it("watchSearchForMovie", () => {
        const watchSearchForMovieIterator = sagas.watchSearchForMovie();
        const expectedSagaIterator = takeEvery("SEARCH_FOR_MOVIE", sagas.searchForMovie)

        sagaHelper.verifySaga(watchSearchForMovieIterator, expectedSagaIterator)
    });

    describe('Search For Movie', () => {
        let movieStr

        beforeEach(() => {
            movieStr = "X"
        })

        it("Searches for Movie", () => {
            const searchForMovieIterator = sagas.searchForMovie(searchActions.searchForMovieAction("X"))

            expect(searchForMovieIterator.next().value).toEqual(call(searchData, "/api/v1/movies", movieStr))
        })
    })
})