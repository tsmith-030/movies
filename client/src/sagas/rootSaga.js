import { fork } from 'redux-saga/effects'
import { watchSearchForMovie } from '../sagas/searchSagas'

export default function* rootSaga() {
    yield [
      fork(watchSearchForMovie)
    ];
}