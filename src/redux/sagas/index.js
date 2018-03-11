import { all } from 'redux-saga/effects';
import messageSaga from './messageSaga';



export default function* rootSaga() {
  yield all([
    messageSaga(),
  ]);
}