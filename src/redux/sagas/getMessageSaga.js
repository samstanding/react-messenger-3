import { call, put, takeLatest } from 'redux-saga/effects';
import { MESSAGE_ACTIONS} from '../actions/messageActions';
import {getMessages} from '../requests/messageRequest';

function* fetchMessages () {
    try {
        yield put({ type: MESSAGE_ACTIONS.REQUEST_START });
        const message = yield call(getMessages);
        yield put({
            type: MESSAGE_ACTIONS.SET_MESSAGES,
            message,
          });
          yield put({
            type: MESSAGE_ACTIONS.REQUEST_DONE,
          });
        } catch (error) {
            yield put({
                type: MESSAGE_ACTIONS.REQUEST_DONE,
              });
            yield put({
            type: MESSAGE_ACTIONS.GET_FAILED,
            message: error.message,
        });  
        }
}

function* getMessageSaga() {
    yield takeLatest (MESSAGE_ACTIONS.GET, fetchMessages);
}

export default getMessageSaga;