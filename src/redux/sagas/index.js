import { all } from 'redux-saga/effects';
import messageSaga from './messageSaga';
import getMessageSaga from './getMessageSaga'



export default function* rootSaga() {
  yield all([
    messageSaga(),
    getMessageSaga(),
  ]);
}